const express = require('express')
const Router = express.Router()
const getControllerApi = require('../controller/getController')

Router.get('/',getControllerApi.availableCourses)

module.exports = Router