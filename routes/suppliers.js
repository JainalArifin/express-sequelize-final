const express = require('express')
const router = express.Router()
const Model = require('../models');

router.get('/', (req, res)=>{
  Model.Suppliers.findAll()
  .then((dataSuppliers) => {
    res.render('suplier', {dtSupplier:dataSuppliers})
  })
})

router.get('/add', (req, res)=>{
  res.render('addSupplier')
})

router.post('/add', (req, res)=>{
  Model.Suppliers.create({
    name: req.body.name,
    kota: req.body.kota
  })
  .then(() => {
    res.redirect('/suppliers')
  })
})

router.get('/delete/:id', (req, res)=>{
  Model.Suppliers.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/suppliers')
  })
})

router.get('/edit/:id', (req, res)=>{
  Model.Suppliers.findAll({
    where:{
      id: req.params.id
    }
  })
  .then((dataSuppliers) => {
    res.render('suppliersEdit', {dtSupplier:dataSuppliers[0]})
  })
})

router.post('/edit/:id', (req, res)=>{
  Model.Suppliers.update({
    name: req.body.name,
    kota: req.body.kota
  },{
    where:{
      id:req.params.id
    }
  })
  .then(() => {
    res.redirect('/suppliers')
  })
})

module.exports = router
