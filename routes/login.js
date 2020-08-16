const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', (req, res, next) => {
    const email = req.body.email
    User.find({email: email}, (err, users) => {
        if (err) {
            res.json({
                confirmation: 'fail',
                error: err
            })

            return
        }

        res.json({
            confirmation: 'success',
            user: users
        })
    })

    res.json({
        data: req.body
    })
})

module.exports = router