import { ISecretProvider } from '../../libs/secret'
import { fetcher } from '../../utils/fetcher';
import { NAME, BASE_URL, ENDPOINTS_V3 } from './config'

const { getSecretsDownload } = ENDPOINTS_V3

class DopplerProvider implements ISecretProvider {
  private name: string = NAME
  private token: string = ''

  constructor (token: string) {
    this.token = token
  }

  public pull = async (params: any): Promise<null | string> => {
    const url = getSecretsDownload(
      params.project,
      params.environment
    )

    const { data } = await fetcher(url, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: `application/json`
      }
    });

    return data
  }
}

export default DopplerProvider
