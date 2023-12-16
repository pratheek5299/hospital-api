const mongoose = require('mongoose');

const reportsSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patients'
    }
}, {
    timestamps: 'true'
});

const Reports = mongoose.models('Reports', reportsSchema);

module.exports = Reports;