import { CommandModule, Argv, ArgumentsCamelCase } from 'yargs'
import chalk from 'chalk'

import { NAME as DOPPLER } from '../providers/Doppler/config'
import DopplerProvider from '../providers/Doppler'

import SecretProvider, {
  DOTENV_FORMAT,
  DOTENV_OUTPUT_FILE
} from '../libs/secret'

// default config for pull command
const config = {
  provider: DOPPLER,
  outputFile: DOTENV_OUTPUT_FILE,
  format: DOTENV_FORMAT,
}

const builder = (yargs: Argv) => {
  const params = yargs
    .option('provider', {
      alias: 'pv',
      string: true,
      describe: 'Secret provider. Ex: doppler | [TODO] hashicorp-consul | [TODO] hashicorp-vault | [TODO] gcp-secretmanager',
      default: config.provider.toLowerCase()
    })
    .option('project', {
      alias: 'p',
      string: true,
      describe: 'Key/Label from the secret'
    })
    .option('environment', {
      alias: 'e',
      string: true,
      describe: 'Scope/Environment from the secret'
    })
    .option('format', {
      alias: 'f',
      string: true,
      describe: 'Output format: dotenv | json | [TODO] tmpl ',
      default: config.format
    })
    .option('output', {
      alias: 'o',
      string: true,
      describe: 'Output file path',
      default: config.outputFile
    })
    .option('token', {
      alias: 't',
      string: true,
      describe: 'Auth Token from provider'
    })

  return params
}

const handler = async (args: ArgumentsCamelCase) => {
  const { provider, token, project, environment, format, output } = args

  const authToken: string = token?.toString() || process.env.SIKRET_TOKEN || ''

  const client = new SecretProvider()
  client.setProvider(new DopplerProvider(authToken))

  // pull secrets
  const result = await client.pull({
    project,
    environment,
    format,
    output
  })

  const pullingDoneMessage = `✨ Done`
  console.info(pullingDoneMessage)
}

// name and description for our command module
const pull: CommandModule = {
  command: 'pull',
  describe: `Pull secret from specific provider. Default to: ${config.provider}`,
  builder,
  handler
}

export default pull
