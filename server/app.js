const express = require('express')
const router = require('./src/routes/api')
const app = new express()
const cookieParser = require('cookie-parser')
const path = require('path')


// Security middleware 
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const cors = require('cors')
const connectDB = require('./src/utility/connectDB')




const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max: 100,  // Limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.'
});



// security middleware implementation 
app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(mongoSanitize())
app.use(limiter)


// database connect 
connectDB()


// route implement 
app.use('/api', router)


module.exports = app











// database connect 