'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {   
   return queryInterface.bulkInsert('States', [{
     name: "NEW",
     uuid: "07aabcc3-3148-4c8e-be13-04dc97e2f590",
     createdAt: new Date(),
     updatedAt: new Date()
   }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('States', null, {});
  }
};
