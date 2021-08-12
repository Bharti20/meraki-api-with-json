const express = require('express')
const Router = express.Router()

const postController = require('../controller/postController')

Router.post('/:id', postController.createData)

module.exports = Router