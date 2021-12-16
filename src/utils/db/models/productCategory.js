import sequelize from "../connect.js";

import s from "sequelize";

const { DataTypes } = s;

const productCategory = sequelize.define(
  "productCategory",
  {
    
  },
  {
    timestamps: false,
  }
);

export default productCategory;

