"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tags",
      [
        {
          id: 1,
          uid: "042E9B32697380",
          name: "카이스트",
          latitude: 36.37049682178313,
          longitude: 127.36128608273715,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          uid: "042E9F32697380",
          name: "이화여자대학교",
          latitude: 37.562544705628845,
          longitude: 126.94765009467245,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          uid: "04F21BFA9D7180",
          name: "",
          latitude: 0,
          longitude: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          uid: "042D8232697380",
          name: "",
          latitude: 0,
          longitude: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          uid: "04AD1AFA9D7180",
          name: "",
          latitude: 0,
          longitude: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          uid: "04A21AFA9D7180",
          name: "",
          latitude: 0,
          longitude: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          uid: "042F9832697380",
          name: "",
          latitude: 0,
          longitude: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          uid: "04BC1AFA9D7180",
          name: "",
          latitude: 0,
          longitude: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          uid: "042F9732697380",
          name: "",
          latitude: 0,
          longitude: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          uid: "045932FA9D7180",
          name: "",
          latitude: 0,
          longitude: 0,
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
