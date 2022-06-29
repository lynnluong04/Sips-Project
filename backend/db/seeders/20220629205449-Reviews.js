'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Reviews', [
        { userId: '1', businessId: '1', title: 'I know I will definitely be back!', description: 'Go to place on a rainy day! Nothing more comforting in the world than a warm, toasty cup of chai.', rating:5, createdAt: new Date(), updatedAt: new Date()},
        { userId: '2', businessId: '1', title: 'If you want to try out something new and unique', description: 'I had such a great experience at this cafe! There is a huge indoor lounge and an outdoor one as well.', rating:4, createdAt: new Date(), updatedAt: new Date()},
        { userId: '1', businessId: '2', title: 'this place is worth it!', description: 'Super instagram worthy spot! Perfect for a date location or happy hour with the girlies! ', rating:4, createdAt: new Date(), updatedAt: new Date()},
        { userId: '2', businessId: '2', title: 'lively and dancy vibe', description: 'Good cocktails and yummy fries. Standard price for cocktails in nyc bars which is $18.', rating:5, createdAt: new Date(), updatedAt: new Date()}

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
