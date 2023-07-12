const express = require('express'); 
const router = express.Router();

const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');


// City routes
router.post('/city', CityController.create);
router.post('/cities', CityController.bulkCreate);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);


// Airport Routes
router.post('/airport', AirportController.create);
router.delete('/airport/:id', AirportController.destroy);
router.get('/airport/:id', AirportController.get);
router.patch('/airport/:id', AirportController.update);


module.exports = router;