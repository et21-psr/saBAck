"use strict";

module.exports = function(sequelize, DataTypes) {
  var PosteoPerfil = sequelize.define("posteoPerfil", {
    idposteo_perfil: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_posteo:{
        type : DataTypes.INTEGER
    },
    id_perfil:{
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
  tableName: 'posteoPerfil'});




//Tarjeta.removeAttribute('id');
  return PosteoPerfil;
};
