#! /usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import init from './commands/init'

yargs(hideBin(process.argv))
  .command(init) // registers the init command module
  // or to register everything in the commands dir: .commandDir('./commands')
  .demandCommand()
  .help()
  .argv
