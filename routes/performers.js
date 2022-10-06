const express = require('express');
const router = express.Router();
const performersCtrl = require('../controllers/performers');
const isLoggedIn = require('../config/auth')

// This router is mounted to a "starts with" path of '/'

// GET /performers/new
router.get('/performers/new', isLoggedIn, performersCtrl.new);
// POST /performers
router.post('/performers', isLoggedIn, performersCtrl.create);
router.post('/movies/:id/performers', performersCtrl.addToCast)

module.exports = router;