"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tags",
      [
        {
          uid: "042E9B32697380",
          name: "카이스트",
          latitude: 127.36128608273715,
          longitude: 36.37049682178313,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uid: "042E9F32697380",
          name: "이화여자대학교",
          latitude: 126.94765009467245,
          longitude: 37.562544705628845,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uid: "04F21BFA9D7180",
          name: "역삼역 4번 출구",
          latitude: 127.03515980477283,
          longitude: 37.500516238601826,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tags", null, {});
  },
};
