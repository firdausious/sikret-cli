type ResponseWithData = Response & { data?: any };

interface Fetcher {
  run(input: RequestInfo, init?: RequestInit): Promise<ResponseWithData>;
}

class BasicFetcher implements Fetcher {
  async run(input: RequestInfo, init?: RequestInit): Promise<ResponseWithData> {
    return await fetch(input, init);
  }
}

class JsonFetcherDecorator implements Fetcher {
  private decoratee: Fetcher;

  constructor(decoratee: Fetcher) {
    this.decoratee = decoratee;
  }

  async run(input: RequestInfo, init?: RequestInit): Promise<ResponseWithData> {
    const response = await this.decoratee.run(input, init);
    const json = await response.json();
    response.data = json;
    return response;
  }
}

const TIMEOUT = 8000; // 8 seconds

class TimeoutFetcherDecorator implements Fetcher {
  private decoratee: Fetcher;

  constructor(decoratee: Fetcher) {
    this.decoratee = decoratee;
  }

  async run(input: RequestInfo, init?: RequestInit): Promise<ResponseWithData> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), TIMEOUT);
    const response = await this.decoratee.run(input, {
      ...init,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  }
}

const decoratedFetcher = new TimeoutFetcherDecorator(
  new JsonFetcherDecorator(
    new BasicFetcher()
  )
);

export const fetcher = decoratedFetcher.run.bind(decoratedFetcher);
