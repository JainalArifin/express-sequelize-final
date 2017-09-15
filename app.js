const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

const item = require('./routes/items.js')

app.use('/items', item)

app.listen(3008, ()=>{
  console.log('sedang berjalan');
})
