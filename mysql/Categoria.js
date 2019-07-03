"use strict";

module.exports = function(sequelize, DataTypes) {
  var Categoria = sequelize.define("categoria", {
    id_categoria: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    nombre:{
        type : DataTypes.STRING
    },
    cat_padre:{
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
  tableName: 'categoria'});



//Tarjeta.removeAttribute('id');
  return Categoria;
};
