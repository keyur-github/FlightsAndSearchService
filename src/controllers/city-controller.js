const { CityService } = require('../services/index');

const cityService = new CityService();

// POST /city
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created the city",
            err: {}
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create the city",
            err: error
        });
    }
}

const bulkCreate = async (req, res) => {
    try {
        const cities = await cityService.createCities(req.body);
        return res.status(201).json({
            data: cities,
            success: true,
            message: "Successfully created the cities",
            err: {}
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create the cities",
            err: error
        });
    }
}

// DELETE /city/:id -> id = req.params.id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted the city",
            err: {}
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the city",
            err: error
        });
    }
}

// GET /city/:id -> id = req.params.id
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully fetched the city",
            err : {}
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the city",
            err: error
        });
    }
}

// PATCH /city/:id  -> data = req.body
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully updated the city",
            err : {}
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            err: error
        });
    }
}

// GET /city
const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "Successfully fetched all the cities",
            err: {}
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get all the cities",
            err: error
        });
    }
}

module.exports = {
    create,
    bulkCreate,
    destroy,
    get,
    update,
    getAll
}