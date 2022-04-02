const express = require('express');
const { createIssue, getSearchedIssues, getfilteredresult } = require('../controllers/issue_controller');
const router = express.Router();

// create issue for the project send as params : id
router.route('/create/:id').post(createIssue);
router.route('/allissues/:id').get(getSearchedIssues);
router.route('/filter/:id').get(getfilteredresult);


module.exports = router;