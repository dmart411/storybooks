const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiesTopology: true, 
            useFindAndModify: false,           
        })
        console.log(`MongoDB Connected: ${conn.connection.host }`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}