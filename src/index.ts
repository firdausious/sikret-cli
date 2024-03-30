#! /usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import pull from './commands/pull'

yargs(hideBin(process.argv))
  .command(pull) // registers the init command module
  // or to register everything in the commands dir: .commandDir('./commands')
  .demandCommand()
  .help()
  .argv
