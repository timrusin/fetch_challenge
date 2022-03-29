const express = require('express')
const Payers = require('../models/Payers')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const payer = await Payers.find({})
        res.json(payer);
    } catch (err) {
        next(err)
    }
})

module.exports = router