const express = require('express');
const { getMyProfile, logout } = require('../controller/usercontroller');
const { isAuthenticated } = require('../middlewares/verifyUser');
const route = express.Router();

route.get('/user/getUser',isAuthenticated, getMyProfile)
route.get('/user/logout', logout);

module.exports = route