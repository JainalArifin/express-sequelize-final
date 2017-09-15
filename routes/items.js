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
  .catch((err) => {
    res.render('addItems', {errItems:'code hp harus di awali dengan HP | SW | LW dan ikuti dengan 4 digit angka'})
  })
})

router.get('/delete/:id', (req, res)=>{
  Model.Item.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/items')
  })
})

router.get('/edit/:id', (req, res)=>{
  Model.Item.findAll({
    where:{
      id: req.params.id
    }
  })
  .then((dataItem) => {
    res.render('itemEdit', {dtItem:dataItem[0]})
  })
})

router.post('/edit/:id', (req, res)=>{
  Model.Item.update({
    name: req.body.name,
    brand: req.body.brand,
    codeitem: req.body.codeitem
  },{
    where: {id: req.params.id}
  })
  .then(() => {
    res.redirect('/items')
  })
})

module.exports = router
