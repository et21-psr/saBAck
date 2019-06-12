"use strict";

module.exports = function(sequelize, DataTypes) {
  var Posteo = sequelize.define("Posteo", {
    id: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_posteo:{
        type : DataTypes.INT
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
      type : DataTypes.INT

  }, { freezeTableName: true,
  tableName: 'Posteo'});



//Tarjeta.removeAttribute('id');
  return Posteo;
};
