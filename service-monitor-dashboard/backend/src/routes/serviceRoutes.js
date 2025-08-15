const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Route to get all services
router.get('/services', serviceController.getAllServices);

// Route to get a single service by ID
router.get('/services/:id', serviceController.getServiceById);

// Route to create a new service
router.post('/services', serviceController.createService);

// Route to update a service by ID
router.put('/services/:id', serviceController.updateService);

// Route to delete a service by ID
router.delete('/services/:id', serviceController.deleteService);

module.exports = router;