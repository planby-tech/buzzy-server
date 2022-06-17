"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UserGroups",
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          groupId: 1,
          userId: 1,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          groupId: 1,
          userId: 2,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          groupId: 1,
          userId: 3,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          groupId: 1,
          userId: 4,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          groupId: 1,
          userId: 5,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          groupId: 2,
          userId: 3,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          groupId: 2,
          userId: 4,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          groupId: 2,
          userId: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserGroups", null, {});
  },
};
