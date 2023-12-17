const mongoose = require('mongoose');

const reportsSchema = new mongoose.Schema({
    doctor: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patients'
    },
    name:{
        type: String
    }
}, {
    timestamps: true
});

const Reports = mongoose.model('Reports', reportsSchema);

module.exports = Reports;