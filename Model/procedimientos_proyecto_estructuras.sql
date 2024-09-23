USE proyecto_estructuras;
drop procedure if exists create_user;
Delimiter $$
# crea un usuario se le pason los datos basicos del usuario
CREATE procedure create_user (IN N_username varchar(30), IN N_constrasenia bigint,IN N_imagen text,in N_nombre varchar(20),IN N_apellido varchar(20),in N_peso decimal(4,1),in N_altura decimal(3,2),IN N_edad tinyint unsigned)
BEgin
insert into Usuario (Username,constrasenia,Imagen,Nombre,Apellido,Peso,Altura,Edad) values (N_username,N_contrasenia,N_imagen,N_nombre,N_apellido,N_peso,N_altura,N_edad);
End $$
delimiter ;
drop function if exists login_user;
delimiter $$
# verifica que el usuario exista y esa sea su contraseña, devuelve un true si con el usuario y contraseña se puede iniciar una secion
Create  function login_user (N_username varchar(30),N_contrasenia bigint) returns boolean deterministic
begin
declare user_exists boolean default false;
select true into user_exists from Usuario where Username = N_username and contrasenia = N_contrasenia;
return user_exists;
end $$
delimiter ;
drop procedure if exists search_ejercicios;
delimiter $$
# busca ejercicios
create procedure search_ejercicios()
begin 
select * from ejercicio ;
end $$
delimiter ;
drop procedure if exists search_one_ejercicio;
delimiter $$
# busca los datos de un ejercicio
create procedure search__one_ejercicio(IN S_id_ejercicio int)
begin 
select * from ejercicio where Id_ejercicio = S_id_ejercicio;
end $$
delimiter ;
drop function if exists ejercicios_rutina;
delimiter $$
CREATE FUNCTION ejercicios_rutina (S_id_rutina INT) RETURNS JSON reads sql data
BEGIN
    DECLARE ejercicios JSON DEFAULT JSON_ARRAY();

    SELECT JSON_ARRAYAGG(
        JSON_OBJECT(
            'Id_ejercicio', Id_ejercicio,
            'Posicion', Posicion,
            'Nombre', Nombre_ejercicio,
            'Dificultad', Dificultad,
            'Categoria', Categoria,
            'Descripcion', Descripcion,
            'Musculos', Musculo,
            'Cantidad_series', Cantidad_series,
            'Tipo_ejecucion', Tipo_ejecucion,
            'Cantidad_ejercicios', Cantidad_ejercicios
        )
    ) INTO ejercicios
    FROM rutina_ejercicio 
    NATURAL JOIN ejercicio 
    WHERE Id_rutina = S_id_rutina order by Posicion;

    RETURN ejercicios;
END $$
delimiter ;
drop procedure if exists search_rutina;
delimiter $$
# busca rutinas por el nombre de usuario de creacion, si se le basa un null en este campo busca las rutinas publicas (colocadas por el admin)
create procedure search_rutina(IN S_username varchar(30))
begin
declare S_id_usuario int;
if S_username is null then
set S_id_usuario = Null;
else
set S_id_usuario= (select Id_usuario from usuario where Username=id_username);
END IF;
select Id_rutina, Nombre_rutina, Nivel, Tiempo_descanzo_serie, Tiempo_descanzo_ejercicio, ejercicios_rutina(Id_rutina) as ejercicios from rituna where Id_usuario = S_id_usuario;
end $$
delimiter ;

drop procedure if exists create_rutina;
delimiter $$
create procedure create_rutina (IN N_nombre_rutina varchar(60), 
in N_nivel enum('principiante','intermedio','avanzado'),
in N_tiempo_descanzo_serie smallint unsigned,
in N_tempo_descanzo_ejercicio smallint unsigned,
in N_id_usuario int)
begin
insert into rutina(Nombre_rutina, Nivel, Tiempo_descanzo_serie, Tiempo_descanzo_ejercicio, Id_usuario) values (N_nombre_rutina,N_nivel,
N_tiempo_descanzo_serie,N_tempo_descanzo_ejercicio,N_id_usuario);
end $$
delimiter ;

drop procedure if exists asociar_rutina_ejercicio;
delimiter $$
create procedure asociar_rutina_ejercicio (in N_id_rutina int,in N_id_ejercicio int,in N_posicion smallint unsigned,in N_cantidad_series smallint unsigned,
in N_tipo_ejecucion enum('T','R'),in N_cantidad_ejercicios smallint unsigned)
Begin
insert into rutina_ejercicio values (N_id_rutina,N_id_ejercicio,N_posicion,N_cantidad_series,N_tipo_ejecucion,N_cantidad_ejercicios);
End$$
delimiter ;

drop procedure if exists drop_rutina;
delimiter $$
create procedure drop_rutina (IN E_id_rutina int)
begin 
delete from rutina where Id_rutins=E_id_rutina;
end$$
delimiter ;

drop procedure clonar_rutina;
delimiter $$
create procedure clonar_rutina (in S_id_rutina int, in S_username varchar(30))
begin
declare S_id_usuario int;
declare N_id_rutina int;
set S_id_usuario =(select Id_usuario from usuario where Username=S_username);
insert into rutina(Nombre_rutina, Nivel, Tiempo_descanzo_serie, Tiempo_descanzo_ejercicio, Id_usuario) (select Nombre_rutina,Nivel, Tiempo_descanzo_serie, Tiempo_descanzo_ejercicio,S_id_usuario from rutina where Id_rutina=S_id_rutina); 
-- set N_id_rutina = (select max(Id_rutina)from rutina);
set N_id_rutina = LAST_INSERT_ID();
insert into rutina_ejercicio (select N_id_rutina, Id_ejercicio, Posicion, Cantidad_series, Tipo_ejecucion, Cantidad_ejercicios from rutina_ejercicio where Id_rutina=S_id_rutina order by Posicion);
end $$
delimiter ;

drop procedure if exists info_user;
delimiter $$
#da la info de un nombre de usuario
create procedure info_user (in S_username varchar(30))
begin
select Username, Imagen,Nombre, Apellido, Peso, Altura, Edad from usuario where Username=S_username;
end $$
delimiter ;




