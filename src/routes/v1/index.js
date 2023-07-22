const express = require('express'); 

const router = express.Router();
const { CityController, AirportController, FlightController} = require('../../controllers/index');
const { FlightMiddlewares } = require('../../middlewares/index');


// City routes
router.post('/city', CityController.create);
router.post('/cities', CityController.bulkCreate);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);


// Airport Routes
router.post('/airports', AirportController.create);
router.delete('/airports/:id', AirportController.destroy);
router.get('/airports/:id', AirportController.get);
router.patch('/airports/:id', AirportController.update);


// Flight Routes
router.post(
    '/flights', 
    FlightMiddlewares.validateCreateFlight, 
    FlightController.create
);
router.get('/flights', FlightController.getAll);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);

module.exports = router;