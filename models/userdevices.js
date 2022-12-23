'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDevices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserDevices.init({
    userId: DataTypes.STRING,
    deviceId: DataTypes.INTEGER,
    info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserDevices',
  });
  return UserDevices;
};