-- datos de tipo de usuario
INSERT INTO `tricks`.`tipousuario` (`id_rol`, `tpoUsuarioRol`) VALUES ('1', 'Administrador');
INSERT INTO `tricks`.`tipousuario` (`id_rol`, `tpoUsuarioRol`) VALUES ('2', 'Docente');
INSERT INTO `tricks`.`tipousuario` (`id_rol`, `tpoUsuarioRol`) VALUES ('3', 'Aspirante');
-- Datos de la tabla estado
INSERT INTO `tricks`.`estado` (`id_estado`, `estado`) VALUES ('1', 'Activo');
INSERT INTO `tricks`.`estado` (`id_estado`, `estado`) VALUES ('2', 'NoActivo');

-- datos usuario
INSERT INTO usuarios (id_usuario, nombre, apellido, mail, contrasena, id_estado, id_rol, asistencias_id_asistencia, grupos_id_grupo) 
VALUES (123, 'Jose', 'Saldaña', 'ejemplo1@gmial.com', 'admin', 1, 1, NULL, NULL);
INSERT INTO usuarios (id_usuario, nombre, apellido, mail, contrasena, id_estado, id_rol, asistencias_id_asistencia, grupos_id_grupo) 
VALUES (124, 'Orlanddo', 'ruiz', 'ejemplo2@gmial.com', 'admin', 1, 1, NULL, NULL);
INSERT INTO usuarios (id_usuario, nombre, apellido, mail, contrasena, id_estado, id_rol, asistencias_id_asistencia, grupos_id_grupo) 
VALUES (125, 'pepe', 'sanchez', 'ejemplo3@gmial.com', 'admin', 2, 1, NULL, NULL);
INSERT INTO usuarios (id_usuario, nombre, apellido, mail, contrasena, id_estado, id_rol, asistencias_id_asistencia, grupos_id_grupo) 
VALUES (126, 'Mauro', 'Bahena', 'ejemplo4@gmial.com', 'maesro', 1, 2, NULL, NULL);
INSERT INTO usuarios (id_usuario, nombre, apellido, mail, contrasena, id_estado, id_rol, asistencias_id_asistencia, grupos_id_grupo) 
VALUES (127, 'Sebastian', 'Sota', 'ejemplo5@gmial.com', 'maestro', 1, 3, NULL, NULL);
