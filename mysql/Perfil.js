"use strict";

module.exports = function(sequelize, DataTypes) {
  var Perfil = sequelize.define("Perfil", {
    id_perfil: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    seguidos:{
        type : DataTypes.INT
    },
    seguidores:{
        type : DataTypes.INT
    },
    foto_perfil:{
        type : DataTypes.STRING
    },
    descripcion:{
       type : DataTypes.STRING
    },
    alias:{
        type : DataTypes.STRING
    },
  }, { freezeTableName: true,
  tableName: 'Perfil'});



//Tarjeta.removeAttribute('id');
  return Perfil;
};
