//import express from 'express'
const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan("dev"))

app.get('/', (req, res) => {
    res.json("Get all")
})

app.get('/:id', (req, res) => {
    res.json("Get by id")
})

app.post('/', (req, res) => {
    res.json("Create by POST")
})

app.delete('/:id', (req, res) => {
    res.json("Delete by DELETE")
})

app.put('/:id', (req, res) => {
    res.json("Update by PUT")
})

module.exports = app