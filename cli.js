#!/usr/bin/env node
'use strict'
const cac = require('cac')
const toggle = require('toggle-screencapture-shadow')

const cli = cac()

cli
  .usage('toggle-screencapture-shadow [options]')
  .command('*', 'Toggle the screencapture shadow', input => {
    const disable = input[0]
    toggle((err, disabled) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(`Shadow is currently ${disabled ? 'disabled' : 'enabled'}.`)
    })
  })

cli.parse()
