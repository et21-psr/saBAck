CREATE TABLE `posteo` (
  `id_posteo` int(11) NOT NULL AUTO_INCREMENT,
  `texto` varchar(45) DEFAULT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `categoria` varchar(45) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `usuario` int(11) NOT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id_posteo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_user` varchar(45) DEFAULT NULL,
  `pais` varchar(45) DEFAULT NULL,
  `nacimiento` date DEFAULT NULL,
  `contraseña` varchar(45) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `sexo` varchar(45) DEFAULT NULL,
  `sentimental` varchar(45) DEFAULT NULL,
  `created_at` varchar(45) DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
SELECT * FROM twinder.usuario;
