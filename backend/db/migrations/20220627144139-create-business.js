'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users'
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      description: {
        type: Sequelize.TEXT
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      zipcode: {
        type: Sequelize.INTEGER
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(14)
      },
      websiteUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Businesses');
  }
};
