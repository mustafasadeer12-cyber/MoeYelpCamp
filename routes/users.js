const express = require('express')
const router = express.Router();
const passport = require('passport')
const User = require('../models/user')
const catchAsync = require('../utils/catchAsync')
const { storeReturnTo } = require('../middleware')

const users = require('../controllers/users')

router.route('/register')
    .get(users.renderRegisterForm)
    .post( catchAsync(users.register))


router.route('/login')
    .get(users.renderLogin)
    .post(storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login'}),users.login )

router.get('/logout', users.logout); 



module.exports = router;




// router.get('/logout', (req, res, next) => {
//     req.logout(function (err) {
//         if (err) {
//             return next(err);
//         }
//     })
//     req.flash('success', 'goodbye')
//     res.redirect('/campgrounds')
// })
