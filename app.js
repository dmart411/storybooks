const express = require('express')
const dontenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

dontenv.config({ path: "./config/config.env" })

const PORT = process.env.PORT

const app = express()

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev '))
}

// Handlebats
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

// Routes
app.use('/', require('./routes/index'))

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})