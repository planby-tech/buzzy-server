"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Groups",
      [
        {
          id: 1,
          name: "플랜바이",
          description: "Buzzy앱 개발팀, 아자아자!!",
          userNumber: 5,
          groupCode: "PLANBY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "우리끼리",
          description: "이화여자대학교 졸업 전시",
          userNumber: 3,
          groupCode: "EWHAUX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Groups", null, {});
  },
};
