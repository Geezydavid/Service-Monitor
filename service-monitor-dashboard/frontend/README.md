# Service Monitoring Dashboard

This project is a service monitoring dashboard built with React for the frontend and Node.js with Express for the backend. It provides a dark-mode interface for monitoring various services, including their statuses, CPU usage, memory usage, and uptime.

## Table of Contents

- [Frontend](#frontend)
- [Backend](#backend)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Frontend

The frontend is developed using React and styled with Tailwind CSS. It includes the following components:

- **Sidebar**: Contains navigation links and a dark mode toggle.
- **Topbar**: Features a search bar and action buttons.
- **Dashboard**: Displays service cards with relevant information.
- **Right Sidebar Widgets**: Shows live logs, uptime charts, and error history.

### Installation

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

## Backend

The backend is built with Node.js and Express, using MongoDB for data storage. It provides RESTful API endpoints for managing service data.

### Installation

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   node src/app.js
   ```

## Usage

Once both the frontend and backend servers are running, you can access the dashboard in your web browser at `http://localhost:3000`. The backend API will be available at `http://localhost:5000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.