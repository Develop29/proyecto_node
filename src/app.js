//import express from 'express'
const express = require("express")
const morgan = require("morgan")

const route = require("./router")

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.use(route)

module.exports = app