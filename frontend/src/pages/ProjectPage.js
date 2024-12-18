import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectComponent from '../components/ProjectComponent';
import AddProject from '../components/AddProject';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHourglassHalf, FaCircleNotch } from 'react-icons/fa'; // Import icons
import './ProjectPage.css';

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get('/api/projects', config);
      setProjects(data);
    };

    fetchProjects();
  }, []);

  const handleProjectAdded = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleProjectUpdated = (updatedProject) => {
    setProjects(projects.map(project => project._id === updatedProject._id ? updatedProject : project));
  };

  // Function to get the appropriate icon based on the project status
  const getStatusIcon = (status) => {
    switch (status) {
      case 'assigned':
        return <FaCircleNotch className="status-icon assigned" />;
      case 'in-progress':
        return <FaHourglassHalf className="status-icon in-progress" />;
      case 'completed':
        return <FaCheckCircle className="status-icon completed" />;
      default:
        return null;
    }
  };

  return (
    <div className="project-page">
      <h1>Project Assignments</h1>
      <div className="actions">
        <Link to="/logout">Logout</Link>
        <Link to="/delete-account">Delete Account</Link>
      </div>
      <div className="add-project-form">
        <AddProject onProjectAdded={handleProjectAdded} />
      </div>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        projects.map(project => (
          <div key={project._id} className="project-item">
            {getStatusIcon(project.status)} {/* Display the icon */}
            <ProjectComponent project={project} onProjectUpdated={handleProjectUpdated} />
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectPage;
