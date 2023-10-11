const express = require('express');
const { isAuthenticated, isAdmin } = require('../middlewares/auth');
const { createJob, singleJob, updateJob, showJobs } = require('../controllers/jobsController');
const router = express.Router();


// user routes
// /api/job/create
router.post('/job/create',isAuthenticated,isAdmin,createJob)

// /api/job/id
router.get('/job/:id',singleJob)
// /api/job/update/job_id
router.put('/job/update/:job_id',isAuthenticated, isAdmin,updateJob)
// /api/job/show
router.get('/jobs/show',showJobs)

module.exports = router;







