const express = require('express')
const Router = express.Router()

const deleteController = require('../controller/deleteController')

Router.delete('/:id', deleteController.dataDelete)

module.exports = Router