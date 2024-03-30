import chalk from 'chalk'

import { formatToDotenv, writeFile } from '../output'

export interface ISecretProvider {
  pull(params: any): Promise<string | null>;
}

export const JSON_FORMAT = 'json'
export const JSON_OUTPUT_FILE = '.json'

export const DOTENV_FORMAT = 'dotenv'
export const DOTENV_OUTPUT_FILE = '.env'

export const TMPL_FORMAT = 'tmpl'
export const TMPL_OUTPUT_FILE = '.tmpl'

class SecretProvider {
  private provider: any;

  constructor() {
  }

  public setProvider = (provider: any) => {
    this.provider = provider
  }

  private writeOutput = (format: string, output: string, data: any) => {
    let parsedResult = ''

    if (format === DOTENV_FORMAT) {
      parsedResult = formatToDotenv(data)
    }

    if (format === JSON_FORMAT) {
      parsedResult = JSON.stringify(data)
    }

    // write the secret output
    writeFile(output, parsedResult)

    return parsedResult
  }

  public pull = async (params: any): Promise<null | string> => {
    const { project, environment, format, output } = params

    const providerNameMessage = `[${chalk.green(this.provider.name)}]`

    const pullingStartMessage = `${providerNameMessage} Pulling secrets from project:${chalk.cyan(project)} environment:${chalk.yellow(environment)}`
    console.info(pullingStartMessage)

    const getSecrets = await this.provider.pull({ project, environment })
    const result = await this.writeOutput(format, output, getSecrets)

    const pullingFinishMessage = `${providerNameMessage} secrets are saved as ${chalk.blue(format)} into file: ${chalk.green(output)}`
    console.info(pullingFinishMessage)

    return result
  }

}

export default SecretProvider
