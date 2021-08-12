const express = require('express')
const Router = express.Router()

const getRoute = require('./getRoute')
const postRoute = require('./PostRoute')
const putRoute = require('./putRoute')
const deleteRoute = require('./deleteRoute')

Router.use('/AllCourses', getRoute)
Router.use('/addData', postRoute)
Router.use('/dataUpdate', putRoute)
Router.use('/deleteData', deleteRoute)

module.exports = Router
