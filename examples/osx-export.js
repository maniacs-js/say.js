#!/usr/bin/env node

const say = require('../')

// no callback, fire and forget
say.export('whats up, dog?', 'Alex', 0.5, './exported.wav', (error) => {
  if (error) {
    return console.log(error)
  }

  console.log('export complete')
})
