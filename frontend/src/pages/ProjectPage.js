import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProjectComponent from '../components/ProjectComponent';
import AddProject from '../components/AddProject';
import './ProjectPage.css';

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) {
      alert('Please log in');
      navigate('/login');
      return;
    }

    const fetchProjects = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get('/api/projects', config);
      setProjects(data);
    };

    fetchProjects();
  }, [navigate]);

  const handleProjectAdded = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleProjectUpdated = (updatedProject) => {
    setProjects(projects.map(project => project._id === updatedProject._id ? updatedProject : project));
  };

  return (
    <div className="project-page">
      <h1>Project Assignments</h1>
      <div className="actions">
        <button onClick={() => navigate('/logout')}>Logout</button>
        <button onClick={() => navigate('/delete-account')}>Delete Account</button>
      </div>
      <div className="add-project-form">
        <AddProject onProjectAdded={handleProjectAdded} />
      </div>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        projects.map(project => (
          <ProjectComponent key={project._id} project={project} onProjectUpdated={handleProjectUpdated} />
        ))
      )}
    </div>
  );
};

export default ProjectPage;