'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Images', [
        {businessId: '1', photoUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/v5Oxy86wull8LRq41OcrDA/o.jpg", createdAt: new Date(), updatedAt: new Date()},
        {businessId: '1', photoUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/1Bifq2GAeJSv78KrrCuFZQ/348s.jpg", createdAt: new Date(), updatedAt: new Date()},
        {businessId: '1', photoUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/GGeoPoWHBUHli_-0XKDB7w/o.jpg", createdAt: new Date(), updatedAt: new Date()},
        {businessId: '2', photoUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/GC_RZyYsGRzSroFRNslWCg/o.jpg", createdAt: new Date(), updatedAt: new Date()},
        {businessId: '2', photoUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/7FPjR5b0bfvnc-2ixWqoWw/o.jpg", createdAt: new Date(), updatedAt: new Date()},
        {businessId: '2', photoUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/E6QGnWSBsg--DC74yVFtqw/o.jpg", createdAt: new Date(), updatedAt: new Date()}

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Images', null, {});
  }
};
