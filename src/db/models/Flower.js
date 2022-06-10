"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Flower extends Model {
    static associate(models) {
      models.Flower.belongsToMany(models.Group, {
        through: "GroupFlowers",
        as: "groups",
        foreignKey: "flowerId",
      });
      models.Flower.hasMany(models.Meeting, {
        foreignKey: "flowerId",
      });
    }
  }
  Flower.init(
    {
      name: DataTypes.STRING,
      size: DataTypes.INTEGER,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Flower",
    }
  );
  return Flower;
};
