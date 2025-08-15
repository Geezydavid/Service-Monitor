const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['up', 'down', 'maintenance'],
        default: 'up',
    },
    cpuUsage: {
        type: Number,
        required: true,
    },
    memoryUsage: {
        type: Number,
        required: true,
    },
    uptime: {
        type: Number,
        required: true,
    },
    lastChecked: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);