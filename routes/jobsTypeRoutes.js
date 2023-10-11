const express = require('express');
const { isAuthenticated, isAdmin } = require('../middlewares/auth');
const { createJobCategory, allJobsType, updateJobsType, deleteJobsType } = require('../controllers/jobsTypeController');
const router = express.Router();



// user routes
// /api/type/create
router.post('/type/create',isAuthenticated,createJobCategory)
// /api/type/jobs
router.get ('/type/jobs',allJobsType)
// /api/type/update/:type_id
router.put('/type/update/:type_id',isAuthenticated,isAdmin,updateJobsType)
// /api/type/delete/:type_id
router.delete('/type/delete/:type_id',isAuthenticated,isAdmin,deleteJobsType)



module.exports = router;


