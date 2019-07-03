"use strict";

module.exports = function(sequelize, DataTypes) {
  var Usuario = sequelize.define("usuario", {
    id_user: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    nombre_user:{
        type : DataTypes.STRING
    },
    contraseña:{
        type : DataTypes.STRING
    },
    perfil:{
       type : DataTypes.INTEGER
    },
    nacimiento:{
        type : DataTypes.DATE
    },
    pais:{
      type : DataTypes.STRING
    },
    correo:{
      type : DataTypes.STRING
    },
    sexo:{
      type : DataTypes.STRING
    },
    sentimental: {
      type: DataTypes.STRING
    },
    gustos:{
      type:DataTypes.STRING
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
  tableName: 'usuario'});



//Tarjeta.removeAttribute('id');
  return Usuario;
};
