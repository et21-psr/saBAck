"use strict";

module.exports = function(sequelize, DataTypes) {
  var Usuario = sequelize.define("Usuario", {
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
       type : DataTypes.INT
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
  }, { freezeTableName: true,
  tableName: 'Usuario'});



//Tarjeta.removeAttribute('id');
  return Usuario;
};
