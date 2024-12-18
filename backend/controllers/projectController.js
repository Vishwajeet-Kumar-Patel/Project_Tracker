// filepath: /c:/Users/vishw/OneDrive/Desktop/Project Tracking System/project-assignment-module/backend/controllers/projectController.js
const Project = require('../models/projectModel');
const asyncHandler = require('express-async-handler');

const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({ user: req.user._id });
    res.json(projects);
});

const getProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (project && project.user.toString() === req.user._id.toString()) {
        res.json(project);
    } else {
        res.status(404).json({ message: 'Project not found' });
    }
});

const createProject = asyncHandler(async (req, res) => {
    const { name, description } = req.body;
    const project = new Project({ name, description, user: req.user._id });
    const createdProject = await project.save();
    res.status(201).json(createdProject);
});

const updateProject = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status, score } = req.body;
    const project = await Project.findById(id);

    if (project && project.user.toString() === req.user._id.toString()) {
        project.status = status !== undefined ? status : project.status;
        project.score = score !== undefined ? score : project.score;
        const updatedProject = await project.save();
        res.json(updatedProject);
    } else {
        res.status(404).json({ message: 'Project not found' });
    }
});

const deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (project && project.user.toString() === req.user._id.toString()) {
        await project.remove();
        res.json({ message: 'Project removed' });
    } else {
        res.status(404).json({ message: 'Project not found' });
    }
});

module.exports = { getProjects, getProjectById, createProject, updateProject, deleteProject };