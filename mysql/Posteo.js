"use strict";

module.exports = function(sequelize, DataTypes) {
  var Posteo = sequelize.define("posteo", {
    id_posteo:{
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
     },
    texto:{
        type : DataTypes.STRING
    },
    imagen:{
        type : DataTypes.STRING
    },
    fecha:{
        type : DataTypes.DATE
    },
    categoria:{
      type : DataTypes.INTEGER
    },
    createdAt:{
      type : DataTypes.DATE,
      field: "created_at"
    },
    updatedAt:{
      type : DataTypes.DATE,
      field: "updated_at"
    }
  }, { freezeTableName: true,
  tableName: 'posteo'});



//Tarjeta.removeAttribute('id');
  return Posteo;
};
