"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          email: "heonsub6558@gmail.com",
          password:
            "$2a$08$wi9OLHNF91vf5FVTRL22Gu04.fbdK2GT3jISNT9yglJ91hij2d7ge",
          name: "노현섭",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          email: "daehan1028@gmail.com",
          password:
            "$2a$08$1dcN8c9D2vBsHgagtNQ99O77UdKgRgYWR9pHRAGhpV4dkjV8gFYlC",
          name: "이대한",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          email: "chocogummy66@gmail.com",
          password:
            "$2a$08$Z/p0WlTjuJIhQxRTQkxhPO2oMfXdX4XCDi30EXop2kagIzq6c5FKm",
          name: "김혜령",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          email: "chery4922@gmail.com",
          password:
            "$2a$08$1dcN8c9D2vBsHgagtNQ99O77UdKgRgYWR9pHRAGhpV4dkjV8gFYlC",
          name: "김채린",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          email: "rhyuhakyoung@gmail.com",
          password:
            "$2a$08$P23.UURodFmWlWjXekLFVua/Ilmowkv0Z6qd6eKApxoUTmeFsDHi.",
          name: "류하경",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
