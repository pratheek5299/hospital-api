const express = require('express');

const router = express.Router();
const passport = require('passport');
const patientsController = require('../../../controllers/api/v1/patients_api');


router.get('/:status',passport.authenticate('jwt', {session: false}), patientsController.filteredReportsByStatus);

module.exports = router;