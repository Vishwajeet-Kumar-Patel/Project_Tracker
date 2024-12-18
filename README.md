# Project Assignment Module

This project is built using the MERN stack (MongoDB, Express, React, Node.js) to manage project assignments for candidates. It allows candidates to view, accept, and track assigned projects, as well as provides a mechanism to track their progress and calculate scores based on task completion.

## Project Structure

```
project-assignment-module
├── backend
│   ├── controllers
│   │   └── projectController.js
│   ├── models
│   │   └── projectModel.js
│   ├── routes
│   │   └── projectRoutes.js
│   ├── config
│   │   └── db.js
│   ├── server.js
│   └── package.json
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   └── ProjectComponent.js
│   │   ├── pages
│   │   │   └── ProjectPage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── package.json
├── README.md
└── .gitignore
```

## Features

- **Project Management**: Candidates can view all available projects, accept assignments, and track their progress.
- **Progress Tracking**: A scoring system to evaluate candidates based on task completion.
- **Dynamic Data Handling**: Data is stored in a MongoDB database and displayed dynamically on the frontend.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd project-assignment-module/backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd project-assignment-module/backend
   node server.js
   ```

2. Start the frontend application:
   ```
   cd project-assignment-module/frontend
   npm start
   ```

## API Endpoints

- `GET /api/projects`: Retrieve all projects
- `GET /api/projects/:id`: Retrieve a specific project by ID
- `POST /api/projects`: Create a new project
- `PUT /api/projects/:id`: Update an existing project
- `DELETE /api/projects/:id`: Delete a project

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.