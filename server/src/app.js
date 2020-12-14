const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const port = process.env.PORT || 5001

const baseUrl = 'mongodb+srv://lampa:lampa1111@cluster0.o5e2x.mongodb.net/lampa-test-task?retryWrites=true&w=majority'

const router = require('./routes/router')

mongoose.connect(baseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(item => {
    console.log('Connected')
}).catch(err => {
    console.log('Caught', err.stack)
})

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())

app.use(express.static(path.join(__dirname, '../../build')))
console.log(__dirname)

app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(port, () => console.log(`Server working on port ${port}`))