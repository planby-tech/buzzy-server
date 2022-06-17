"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Activities",
      [
        {
          id: 1,
          category: "식사",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          category: "영화",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          category: "쇼핑",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          category: "여행",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          category: "운동",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          category: "미용",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          category: "드라이브",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          category: "피크닉",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          category: "캠핑",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          category: "게임",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          category: "전시회",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          category: "기타",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 999,
          category: "설문",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Activities", null, {});
  },
};
