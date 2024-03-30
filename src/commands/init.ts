import { CommandModule, Argv, ArgumentsCamelCase } from 'yargs'
import chalk from 'chalk'

// the builder function can be used to define additional
// command line arguments for our command
function builder(yargs: Argv) {
  return yargs.option('name', {
    alias: 'n',
    string: true
  })
}

// the handler function will be called when our command is executed
// it will receive the command line arguments parsed by yargs
function handler(args: ArgumentsCamelCase) {
  const { name } = args
  console.log(chalk.green('Hello world!'), name)
}

// name and description for our command module
const init: CommandModule = {
  command: 'init',
  describe: 'Init command',
  builder,
  handler
}

export default init
