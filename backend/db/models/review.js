'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
    businessId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Businesses'
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Business, {
      foreignKey: 'businessId'
    })
    Review.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return Review;
};
