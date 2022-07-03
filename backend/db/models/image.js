'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    businessId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Businesses"
      }
    },
    photoUrl: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Business, {
      foreignKey: 'businessId'
    })
  };
  return Image;
};
