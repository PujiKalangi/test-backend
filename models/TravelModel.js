import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Place from "./PlaceModel.js";

const { DataTypes } = Sequelize;

const Travel = db.define(
  "travel",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 100],
        },
      },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

Place.hasMany(Travel);

Travel.belongsTo(Place, {
  foreignKey: "menuId",
});

export default Travel;
