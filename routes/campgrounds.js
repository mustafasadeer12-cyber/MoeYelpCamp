const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const Campground = require('../models/campground')
const {storeReturnTo ,isLoggedIn, validateCampground, isAuthor} = require('../middleware')
const campgrounds = require('../controllers/campgrounds')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})



router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(upload.array('image'), (req, res, next) => {
        console.log('POST / route hit')
        console.log('req.body:', req.body)
        console.log('req.files:', req.files)
        res.send('it worked!')
    })
    // .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createNewCampground));

router.get('/new',isLoggedIn, campgrounds.renderNewForm)
 
router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor,validateCampground,catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor,catchAsync(campgrounds.deleteCampground))


router.get('/:id/edit',isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))





module.exports = router;