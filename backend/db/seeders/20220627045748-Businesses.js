'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Businesses', [
        {
        userId: 1,
        name: 'The Chai Spot',
        address:'156 Mott St',
        city:'New York',
        state: 'NY',
        zipcode: 10013,
        category:'Tea',
        phone: '(646) 678-5868',
        websiteUrl:'https://www.thechaispot.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        userId: 1,
        name: 'Sel Rrose',
        descriptions:'Oysters, French Plates, Specialty Cocktails, Premium Liquors, Wine & Craft Beer in the evenings.',
        address:'1 Delancey St',
        city:'New York',
        state: 'NY',
        zipcode: 10002,
        category:'Bar',
        phone: '(646) 450-2557',
        websiteUrl:'http://www.selrrose.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        userId: 1,
        name: 'Le Phin',
        descriptions:,
        address:'259 E 10th St',
        city:'New York',
        state: 'NY',
        zipcode: 10009,
        category:'Coffee',
        phone: '(929) 422-3972',
        websiteUrl:'https://www.instagram.com/lephin.nyc/?hl=en',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        userId: 1,
        name: 'Alimama',
        descriptions:'Indulge in our selection of teas and sweet treats - from donuts to cream puffs - without any guilt\!
        Most of our offerings are gluten-free, and we have vegan options too.',
        address:'89A Bayard St',
        city:'New York',
        state: 'NY',
        zipcode: 10013,
        category:'Bubble Tea',
        phone: '(212) 235-7288',
        websiteUrl:'https://www.orderalimama.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'Juice Vitality',
        descriptions:,
        address:'(212) 477-0071',
        city:'New York',
        state: 'NY',
        zipcode: 10009,
        category:'Smoothie',
        phone: '(212) 477-0071',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Businesses', null, {});
  }
};
