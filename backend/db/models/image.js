'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    businessId: DataTypes.INTEGER,
    photoUrl: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(model.Business, {
      foreignKey: 'businessId'
    })
  };
  return Image;
};
