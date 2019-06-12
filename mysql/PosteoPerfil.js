"use strict";

module.exports = function(sequelize, DataTypes) {
  var PosteoPerfil = sequelize.define("PostePerfil", {
    idposteo_perfil: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_posteo:{
        type : DataTypes.INT
    },
    id_perfil:{
        type : DataTypes.INT

  }, { freezeTableName: true,
  tableName: 'PosteoPeril'});



//Tarjeta.removeAttribute('id');
  return PosteoPerfil;
};
