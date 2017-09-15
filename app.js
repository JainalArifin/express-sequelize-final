const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

const index = require('./routes/index')
const item = require('./routes/items.js')
const suppliers = require('./routes/suppliers.js')

app.use('/', index)
app.use('/items', item)
app.use('/suppliers', suppliers)


app.listen(3008, ()=>{
  console.log('sedang berjalan');
})
