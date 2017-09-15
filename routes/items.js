const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', (req, res)=>{
  Model.Item.findAll()
  .then((dataItem) => {
    // res.send(dataItem)
    res.render('item', {dtItem:dataItem})
  })
  .catch((err) => {
    res.send(err)
  })
})

router.get('/add', (req, res)=>{
  res.render('addItems')
})

router.post('/add', (req, res)=>{
  Model.Item.create({
    name: req.body.name,
    brand: req.body.brand,
    codeitem: req.body.codeitem
  })
  .then(() => {
    res.redirect('/items')
  })
})


module.exports = router
