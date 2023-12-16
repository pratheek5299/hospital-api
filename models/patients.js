const mongoose = require('mongoose');

const patientsSchema = new mongoose.Schema({
    phone: {
        type: String,
        unique: true
    },
    name: {
        type: String,
    },
    reports: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reports'
        }
    ]
},{
    timestamps: true
});

const Patients = mongoose.model('Patients', patientsSchema);

module.exports = Patients;