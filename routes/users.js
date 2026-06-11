const express = require('express')
const router = express.Router();
const passport = require('passport')
const User = require('../models/user')
const catchAsync = require('../utils/catchAsync')
const { storeReturnTo } = require('../middleware')

const user = require('../controllers/users')


router.get('/register',user.renderRegisterForm)

router.post('/register', catchAsync(user.register))

router.get('/login', user.renderLogin)

router.post('/login',storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login'}),user.login )

router.get('/logout', user.logout); 



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
