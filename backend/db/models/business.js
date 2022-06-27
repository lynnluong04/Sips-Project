'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User' //singular or plural?
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    websiteUrl: {
      type: DataTypes.STRING,
    }
  }, {});
  Business.associate = function(models) {
   Business.belongsTo(models.User, {
    foreignKey: 'userId'
   })
  };
  return Business;
};
