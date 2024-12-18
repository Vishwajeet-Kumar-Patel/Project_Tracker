import React, { useState } from 'react';
import axios from 'axios';

const ProjectComponent = ({ project, onProjectUpdated }) => {
  const [status, setStatus] = useState(project.status);
  const [score, setScore] = useState(project.score);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(`/api/projects/${project._id}`, { status, score }, config);
      onProjectUpdated(data);
      alert('Project updated successfully!');
    } catch (error) {
      console.error('Error updating project:', error);
      alert('Failed to update project.');
    }
  };

  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Status: </label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="assigned">Assigned</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <label>Score: </label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Project</button>
      </form>
    </div>
  );
};

export default ProjectComponent;