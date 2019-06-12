"use strict";

module.exports = function(sequelize, DataTypes) {
  var Categoria = sequelize.define("Categoria", {
    id_cat: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    nombre_cat:{
        type : DataTypes.STRING
    },
    contraseña:{
        type : DataTypes.STRING
    },
    cat_padre:{
      type : DataTypes.INT
    }
  }, { freezeTableName: true,
  tableName: 'Categoria'});



//Tarjeta.removeAttribute('id');
  return Categoria;
};
