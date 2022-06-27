'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING
    },
    zipcode: {
      type: DataTypes.INTEGER
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING
    },
    websiteUrl: {
      type: DataTypes.STRING
    }
  }, {});
  Business.associate = function(models) {
    Business.belongsTo(models.User, {
      foreignKey: 'userId'
     })
  };
  return Business;
};
