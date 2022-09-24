const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/nodeDB')
        console.log("Database is connected")
    } catch (error) {
        console.log("Error in connection: " + error)
    }
    
}

module.exports = { connectDB }