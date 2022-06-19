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
          name: "국회의사당",
          latitude: 37.53190827313679,
          longitude: 126.91416237338858,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          uid: "042D8232697380",
          name: "경복궁",
          latitude: 37.5776087830657,
          longitude: 126.976896737645,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          uid: "04AD1AFA9D7180",
          name: "남산타워",
          latitude: 37.551279740966,
          longitude: 126.988217046052,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          uid: "04A21AFA9D7180",
          name: "호미곶 상생의 손",
          latitude: 36.0767341945711,
          longitude: 129.570044538751,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          uid: "042F9832697380",
          name: "제주공항",
          latitude: 33.5070789578184,
          longitude: 126.492769004244,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          uid: "04BC1AFA9D7180",
          name: "첨성대",
          latitude: 35.8347180469201,
          longitude: 129.219020190172,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          uid: "042F9732697380",
          name: "광화문 광장",
          latitude: 37.572602860810186,
          longitude: 126.97691639601517,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          uid: "045932FA9D7180",
          name: "63빌딩",
          latitude: 37.5198995549038,
          longitude: 126.940200432343,
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
