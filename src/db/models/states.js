'use strict';
module.exports = (sequelize, DataTypes) => {
  var States = sequelize.define('States', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    uuid: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING
  }, {});
  States.associate = function(models) {
    States.hasMany(models.Tasks, { foreignKey: 'stateId'});    
  };
  return States;
};