const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,    
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.error('MongoDB Error:', err)
        process.exit(1)
    }
}

module.exports = connectDB