const { Schema, model } = require("mongoose")

const taskSchema = new Schema({
    title: String,
    body: String,
    done: Boolean
}, {
    versionKey: false
})

module.exports = model('Task', taskSchema)