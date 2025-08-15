# Service Monitoring Dashboard Backend

This is the backend for the Service Monitoring Dashboard application. It is built using Node.js, Express, and MongoDB.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd service-monitor-dashboard/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Configuration

1. Set up your MongoDB connection in `src/config/db.js`. Make sure to replace the placeholder with your actual MongoDB connection string.

### Running the Application

To start the server, run:
```
npm start
```

The server will start on `http://localhost:5000` by default.

### API Endpoints

- `GET /api/services`: Fetch all services
- `POST /api/services`: Create a new service
- `PUT /api/services/:id`: Update a service status
- `DELETE /api/services/:id`: Delete a service

### Testing

You can run tests using:
```
npm test
```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.