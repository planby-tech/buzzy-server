"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Meetings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      start: {
        type: Sequelize.STRING,
      },
      end: {
        type: Sequelize.STRING,
      },
      allDay: {
        type: Sequelize.BOOLEAN,
      },
      duration: {
        type: Sequelize.JSON,
      },
      tagNumber: {
        type: Sequelize.INTEGER,
      },
      postNumber: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Meetings");
  },
};
