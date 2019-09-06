const express = require('express')
const productsDb = require('../data/helpers/projectModel')

const router = express.Router()

router.use(express.Router())

router.get('/:id', (req, res) => {
    const { product } = req.params
    console.log(product)
    productsDb.get(product).then(pro => {
        res.status(200).json({ pro })
    }).catch((err) => {
        res.status(500).send(`there was an error ${err}`)
    })
})

router.post('/', (req, res) => {
    const product = req.body
    productsDb.insert(product).then((pro) => {
        res.status(200).json({ pro })
    })
        .catch((err) => {
            res.status(500).send(`there was an error ${err}`)
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const product = req.body

    console.log(product)
    productsDb.update(id, product).then(pro => {
        res.status(200).json({ pro })
    })
        .then(err => {
            res.status(500).json({ err })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    console.log(id)
    productsDb.remove(id).then(pro => {
        res.status(200).json({ pro })
    })
        .catch(err => {
            res.status(500).json({ err })
        })
})



router.get('/', (req, res) => {
    res.send('welcome to projects')
})


module.exports = router