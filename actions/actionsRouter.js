const express = require('express')
const actionsDb = require('../data/helpers/actionModel.js')

const router = express.Router()

router.use(express.Router())

router.get('/', (req, res) => {
    res.send('welcome to actions')
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    actionsDb.get(id).then(result => {
        res.status(201).json({ result })
    })
})

router.post('/', (req, res) => {
    const action = req.body
    console.log(action)
    actionsDb.insert(action).then(act => {
        res.status(201).json({ act })
    })
        .catch(err => {
            res.status(500).json({ err })
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const action = req.body

    console.log(action, id)

    actionsDb.update(id, action).then(actUpdated => {
        res.status(201).json({ actUpdated })
    })
        .catch(err => {
            res.status(500).json({ err })
        })

})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    actionsDb.remove(id).then(gone => {
        res.status(201).json({ gone })
    })
        .catch(err => {
            res.status(500).json({ err })
        })
})





module.exports = router