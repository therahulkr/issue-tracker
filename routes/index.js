const express = require('express');
const { homepage } = require('../controllers/hompage_controller');
// const { homepage } = require('../controllers/home_controller');

const router = express.Router();

console.log("router loaded")
router.route('/').get(homepage);


router.use('/project',require('./project_routes'));
router.use('/issue',require('./issue_routes'));


module.exports = router;