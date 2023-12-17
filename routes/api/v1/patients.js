const express = require('express');

const router = express.Router();
const passport = require('passport');
const patientsController = require('../../../controllers/api/v1/patients_api');

router.post('/register',passport.authenticate('jwt', {session: false}), patientsController.registerPatient);
router.post('/:id/create_report',passport.authenticate('jwt', {session: false}), patientsController.createReport);
router.get('/:id/all_reports',passport.authenticate('jwt', {session: false}), patientsController.allReports);

module.exports = router;