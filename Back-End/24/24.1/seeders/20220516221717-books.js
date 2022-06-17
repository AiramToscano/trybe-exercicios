'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   queryInterface.bulkInsert("Books", [
     {
      title: 'As historias do Airam',
      author: 'Airam Toscano',
      pageQuantity: 200,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
     }
   ])
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
