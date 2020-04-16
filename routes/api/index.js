const route =require('express').Router()

route.use("/todoList", require('./todoList'))
route.use("/", require('./notes'))

exports =module.exports={route}