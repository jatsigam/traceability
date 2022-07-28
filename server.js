const express = require('express')
const app = express()
const path = require('path')

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '46afe1344bd640ed9d6a45b522778a51',
  captureUncaught: true,
  captureUnhandledRejections: true,
})


