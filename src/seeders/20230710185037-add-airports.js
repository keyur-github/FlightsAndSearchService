'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Juhu Aerodrome Airport",
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sardar Vallabhbhai Patel International Airport",
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Surat Airport",
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
