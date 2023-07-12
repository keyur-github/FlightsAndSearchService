const { Op } = require("sequelize");

const { City } = require('../models/index');

class CityRepository {
    
    // Here you don't need to create object for City class because the create, bulkCreate, destroy, etc all this functions provide by sequelize model are static. And static functions don't require object to call those functions
    async createCity({name}) {
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in the city repository layer");
            throw {error};
        }
    } 
    
    async createCities(arr) {
        try {
            const cities = await City.bulkCreate(arr);
            return cities;
        } catch (error) {
            console.log("Something went wrong in the city repository layer");
            throw {error};
        }
    } 

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch(error) {
            console.log("Something went wrong in city repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            // The below approach also works but will not return updated object
            // If we are using PG SQL then returning: true can be used, else not 
            // const city = await City.update(data, {
            //     where : {
            //         id : cityId
            //     }
            // });

            // For getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } 
        catch (error) {
            console.log("Something went wrong in city repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getAllCities(filter) {
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

}

module.exports = CityRepository;
