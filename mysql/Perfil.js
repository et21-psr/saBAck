"use strict";

module.exports = function(sequelize, DataTypes) {
  var Perfil = sequelize.define("perfil", {
    id_perfil: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    seguidos:{
        type : DataTypes.INTEGER
    },
    seguidores:{
        type : DataTypes.INTEGER
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
    createdAt:{
      type : DataTypes.DATE,
      field: "created_at"
    },
    updatedAt:{
      type : DataTypes.DATE,
      field: "updated_at"
    }
  }, { freezeTableName: true,
  tableName: 'perfil'});



//Tarjeta.removeAttribute('id');
  return Perfil;
};
