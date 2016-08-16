var express = require('express');
var router = express.Router();
//var jwt = require('express-jwt');
//var auth = jwt({
 //   secret: process.env.JWT_SECRET,
 //   userProperty: 'payload'
//});

//var ctrlLocations = require('../controllers/locations'
var ctrlDevices = require('../controllers/devices');
//var ctrlReviews = require('../controllers/reviews');
//var ctrlAuth = require('../controllers/authentication');

// devices
//router.get('/locations', ctrlLocations.locationsListByDistance);
router.get('/devices', ctrlDevices.devicesList);
//router.post('/locations', ctrlLocations.locationsCreate);
//router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
//router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
//router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);

// reviews
//router.post('/locations/:locationid/reviews', auth, ctrlReviews.reviewsCreate);
//router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
//router.put('/locations/:locationid/reviews/:reviewid', auth, ctrlReviews.reviewsUpdateOne);
//router.delete('/locations/:locationid/reviews/:reviewid', auth, ctrlReviews.reviewsDeleteOne);

// authentication
//router.post('/register', ctrlAuth.register);
//router.post('/login', ctrlAuth.login);

module.exports = router;