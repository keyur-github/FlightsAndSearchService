const { AirportService } = require('../services/index');

const airportService = new AirportService();


const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created an airport",
            err: {}
        })
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create an airport",
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted an airport",
            err: {}
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete an airport",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const airport = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Successfully fetched an airport",
            err: {}
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch an airport",
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const airport = await airportService.updateAirport(req.params.id, req.body);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Successfully updated an airport",
            err: {}
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update an airport",
            err: error
        });
    }
}


module.exports = {
    create,
    destroy,
    get,
    update
}