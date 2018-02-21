'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Tasks', 'stateId', {      
      allowNull: false,      
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      references: {
        model: "States",
        key: "uuid"
      }
    })
  },

  down: (queryInterface, Sequelize) => {}
};
