const { Airport } = require('../models/index');
const CrudRepository = require('./crud-repository');

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRepository;


// class AirportRepository {

//     async createAirport({ name , address , cityId}) {
//         try {
//             const airport = await Airport.create({ name , address , cityId });
//             return airport;
//         } 
//         catch (error) {
//             console.log("Something went wrong in Airport Repository Layer");
//             throw { error };
//         }
//     }

//     async deleteAirport(airportId) {
//         try {
//             const response = await Airport.destroy({
//                 where: {
//                     id: airportId
//                 }
//             });
//             return response;
//         } 
//         catch (error) {
//             console.log("Something went wrong in Airport Repository Layer");
//             throw { error };
//         }
//     }

//     async getAirport(airportId) {
//         try {
//             const airport = await Airport.findByPk(airportId);
//             return airport;
//         } 
//         catch (error) {
//             console.log("Something went wrong in Airport Repository Layer");
//             throw { error };
//         }
//     }

//     async updateAirport(airportId, data) {
//         try {
//             const airport = await Airport.findByPk(airportId);
//             airport.name = data.name;
//             airport.address = data.address;
//             await airport.save();
//             return airport;
//         } 
//         catch (error) {
//             console.log("Something went wrong in Airport Repository Layer");
//             throw { error };
//         }
//     }

// }
