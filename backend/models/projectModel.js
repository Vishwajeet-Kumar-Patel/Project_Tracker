// filepath: /c:/Users/vishw/OneDrive/Desktop/Project Tracking System/project-assignment-module/backend/models/projectModel.js
const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['assigned', 'in-progress', 'completed'],
        default: 'assigned',
    },
    score: {
        type: Number,
        default: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;