const express = require('express')
const router = express.Router()
// You Do - Require the yet to be created reviews controller 
const reviewsCtrl = require('../controllers/reviews')
const isLoggedIn = require('../config/auth')

// You Do - Define the Route below
router.post('/movies/:id/reviews', isLoggedIn,  reviewsCtrl.create)
router.delete('/reviews/:id', isLoggedIn,  reviewsCtrl.delete)

module.exports = router