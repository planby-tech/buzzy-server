"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      models.Tag.belongsToMany(models.Group, {
        through: "GroupTags",
        as: "groups",
        foreignKey: "tagId",
      });
      models.Tag.belongsToMany(models.User, {
        through: "UserTags",
        as: "users",
        primaryKey: "tagId",
      });
      models.Tag.belongsToMany(models.Meeting, {
        through: "MeetingTags",
        as: "meetings",
        primaryKey: "tagId",
      });
    }
  }
  Tag.init(
    {
      uid: DataTypes.STRING,
      name: DataTypes.STRING,
      latitude: DataTypes.DOUBLE,
      longitude: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );
  return Tag;
};
