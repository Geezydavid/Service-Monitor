# Service Monitoring Dashboard

This project is a service monitoring dashboard built with React for the frontend and Node.js with Express for the backend. It provides a dark-mode interface for monitoring various services, including their statuses, CPU usage, memory usage, and uptime.

## Project Structure

```
service-monitor-dashboard
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── serviceController.js
│   │   ├── models
│   │   │   └── service.js
│   │   ├── routes
│   │   │   └── serviceRoutes.js
│   │   ├── app.js
│   │   └── config
│   │       └── db.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Topbar.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── RightSidebarWidgets.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── styles
│   │       └── tailwind.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Features

- **Dark Mode**: The dashboard supports a dark mode for better visibility in low-light environments.
- **Service Monitoring**: Monitor various services with real-time updates on their status, CPU, memory, and uptime.
- **Responsive Design**: The application is designed to be responsive and user-friendly across different devices.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running, or access to a MongoDB cloud instance.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd service-monitor-dashboard
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   node src/app.js
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

### API Endpoints

The backend provides several API endpoints for managing services. Refer to the `backend/README.md` for detailed information on the available endpoints and their usage.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.