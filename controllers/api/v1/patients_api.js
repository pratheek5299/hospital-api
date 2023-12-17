const Patients = require('../../../models/patients');

const Reports = require('../../../models/reports');

module.exports.registerPatient = async function(req, res){
    try{
        let patients = await Patients.findOne({phone: req.body.phone});
        if(patients){
            return res.status(200).json({
                message: patients
            })
        }else{
            let patients = await Patients.create(req.body);
            return res.status(200).json({
                message: 'The new patient has been registered'
            })
        }

        // return res.status(200).json({
        //     message: {
        //         'mainbody': req.body.phone,
        //         'user': req.user
        //     }
        // })
    }catch(err){
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

module.exports.createReport = async function(req, res){
    try{
        let patient = await Patients.findById(req.params.id);
        if(patient){
            let report = await Reports.create({
                doctor: req.user.name,
                status: req.body.status,
                patient: req.params.id,
                name: patient.name
            });
            patient.reports.push(report);
            patient.save();
            return res.status(200).json({
                message: 'Report created'
            })
        }else{
            return res.status(404).json({
                message: 'Patient Not Found'
            })
        }
    }catch(err){
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

module.exports.allReports = async function(req, res){
    try{
        let patient = await Patients.findById(req.params.id).sort('-createdAt').populate({
            path: 'reports',
        });
        if(patient){
            return res.status(200).json(patient.reports)
        }else{
            return res.status(404).json({
                message: 'Patient Not Found'
            })
        }

    }catch(err){
        return res.status(500).json({
            message: err
        })
    }
}

module.exports.filteredReportsByStatus = async function(req, res){
    try{
        let reports = await Reports.find({status: req.params.status});
        return res.status(200).json(reports);
    }catch(err){
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}