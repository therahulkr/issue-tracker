const express = require('express');
const { display, createProject,projectDetails, removeProject } = require('../controllers/project_controller');
const router = express.Router();

console.log("user router loaded")

router.route('/new').get(display);
router.route('/create').post(createProject)
router.route('/:id').get(projectDetails)
router.route('/delete/:id').get(removeProject)
// router.route('/logout').get(loginUser);
// router.get('/login',loginUser);
// router.get('/profile/:id',passport.checkAuthentication,user.profile);



module.exports = router;