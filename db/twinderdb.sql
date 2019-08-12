CREATE TABLE `categoria` (
  `idcategoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `catPadre` int(11) DEFAULT NULL,
  PRIMARY KEY (`idcategoria`),
  KEY `cat-categoria_idx` (`catPadre`),
  CONSTRAINT `cat-categoria` FOREIGN KEY (`catPadre`) REFERENCES `categoria` (`idcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `perfil` (
  `idPerfil` int(11) NOT NULL AUTO_INCREMENT,
  `seguidos` int(10) unsigned zerofill DEFAULT NULL,
  `seguidores` int(10) unsigned zerofill DEFAULT NULL,
  `fotoPerfil` varchar(45) DEFAULT NULL,
  `descripcion` varchar(80) DEFAULT NULL,
  `alias` varchar(20) DEFAULT NULL,
  `posteos` int(11) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  PRIMARY KEY (`idPerfil`),
  KEY `posteosperfil_idx` (`posteos`),
  CONSTRAINT `posteosperfil` FOREIGN KEY (`posteos`) REFERENCES `posteo` (`idposteo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `posteo` (
  `idposteo` int(11) NOT NULL AUTO_INCREMENT,
  `texto` varchar(180) DEFAULT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `fecha` datetime NOT NULL,
  `categoria` int(11) DEFAULT NULL,
  PRIMARY KEY (`idposteo`),
  KEY `categoriaposteo_idx` (`categoria`),
  CONSTRAINT `categoriaposteo` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`idcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

