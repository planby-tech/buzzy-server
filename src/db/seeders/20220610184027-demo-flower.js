"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Flowers",
      [
        {
          name: "민트꽃",
          size: 1,
          type: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "보라꽃",
          size: 2,
          type: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "노란꽃",
          size: 3,
          type: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Flowers", null, {});
  },
};
