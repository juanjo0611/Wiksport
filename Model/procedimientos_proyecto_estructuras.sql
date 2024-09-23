USE Proyecto_Estructuras;

drop procedure if exists create_user;

Delimiter $$

# crea un usuario se le pason los datos basicos del usuario
CREATE procedure create_user (IN N_username varchar(30), IN N_constrasenia bigint,in N_nombre varchar(20),IN N_apellido varchar(20),in N_peso decimal(4,1),in N_altura decimal(3,2),IN N_edad tinyint unsigned)
BEgin
insert into Usuario (Username,constrasenia,Nombre,Apellido,Peso,Altura,Edad) values (N_username,N_contrasenia,N_nombre,N_apellido,N_peso,N_altura,N_edad);
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

drop procedure if exists search_ejercicio_next;

delimiter $$

# busca ejercicios de 10 en 10 por nombre y categoria, si se le pasa un null no hace filtras en estos campo, si se le pasa un id de ejercicio busca los siquientes 10
create procedure search_ejercicio_next (in S_nombre_ejercicio varchar(60),IN S_categoria varchar(20),in S_id_ejercicio int)
begin 
select * from ejercicio where (S_nombre_ejercicio is null or Nombre_ejercicio like CONCAT('%', S_nombre_ejercicio, '%') ) and ( S_categoria is null or Categoria=S_categoria ) and (S_id_ejercicio is null or Id_ejercicio > S_id_ejercicio) order by Id_ejercicio limit 10;
end $$

delimiter ;

drop procedure if exists search_ejercicio_back;

delimiter $$

# lo mismo que el anterior procedimiento pero con los anteriores 10
create procedure search_ejercicio_back (in S_nombre_ejercicio varchar(60),IN S_categoria varchar(20),in S_id_ejercicio int)
begin
select * from ejercicio where (S_nombre_ejercicio is null or Nombre_ejercicio like CONCAT('%', S_nombre_ejercicio, '%') ) and ( S_categoria is null or Categoria=S_categoria ) and (S_id_ejercicio is null or Id_ejercicio < S_id_ejercicio) order by Id_ejercicio DESC limit 10;
end $$

delimiter ;

drop procedure if exists search_ejercicio;

delimiter $$

# busca ejercicios de 10 en 10 por nombre y categoria, si se le pasa un null no hace filtras en estos campo, si se le pasa un id de ejercicio busca los siquientes 10
create procedure search_ejercicio(in S_nombre_ejercicio varchar(60),IN S_categoria varchar(20))
begin 
select * from ejercicio where (S_nombre_ejercicio is null or Nombre_ejercicio like CONCAT('%', S_nombre_ejercicio, '%') ) and ( S_categoria is null or Categoria=S_categoria );
end $$

delimiter ;

drop function if exists min_id_ejercicio;

delimiter $$

create function min_id_ejercicio () returns int reads sql data
begin
declare mini int;
select min(Id_ejercicio) into mini from ejercicio;
return mini;
end $$

delimiter ;

drop function if exists max_id_ejercicio;

delimiter $$
create function max_id_ejercicio () returns int reads sql data
begin
declare maxi int;
select max(Id_ejercicio) into maxi from ejercicio;
return maxi;
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

drop procedure if exists search_rutina_next ;

delimiter $$

# busca rutinas por el nombre de usuario de creacion, si se le basa un null en este campo busca las rutinas publicas (colocadas por el admin), lo hace de 10 en 10, buscando las siquientes 10 de un id pasado
create procedure search_rutina_next (IN S_username varchar(30), in S_id_rutina int)
begin
declare S_id_usuario int;
if S_username is null then
set S_id_usuario = Null;
else
set S_id_usuario= (select Id_usuario from usuario where Username=id_username);
END IF;
select Id_rutina, Nombre_rutina, Nivel, Tiempo_descanzo_serie, Tiempo_descanzo_ejercicio, ejercicios_rutina(Id_rutina) from rituna where Id_usuario = S_id_usuario and (S_id_ruitna is null or Id_rutina > S_id_rutina) order by Id_rutina limit 10;
end $$
delimiter ;

drop procedure if exists search_rutina_back ;

delimiter $$

# lo mismo que el anterior pero con las anteriores 10
create procedure search_rutina_back (IN S_username varchar(30), in S_id_rutina int)
begin
declare S_id_usuario int;
if S_username is null then
set S_id_usuario = Null;
else
set S_id_usuario= (select Id_usuario from usuario where Username=id_username);
END IF;
select Id_rutina, Nombre_rutina, Nivel, Tiempo_descanzo_serie, Tiempo_descanzo_ejercicio, ejercicios_rutina(Id_rutina) from rituna where Id_usuario = S_id_usuario and (S_id_ruitna is null or Id_rutina < S_id_rutina) order by Id_rutina DESC limit 10;
end $$

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

drop function if exists min_id_rutina;

delimiter $$

create function min_id_rutina () returns int reads sql data
begin
declare mini int;
select min(Id_rutina) into mini from rutina;
return mini;
end $$

delimiter ;

drop function if exists max_id_rutina;

delimiter $$

create function max_id_rutina () returns int reads sql data
begin
declare maxi int;
select max(Id_rutina) into maxi from rutina;
return maxi;
end $$

delimiter ;

drop procedure if exists info_user;

delimiter $$

#da la info de un nombre de usuario
create procedure info_user (in S_username varchar(30))
begin
select Nombre, Apellido, Peso, Altura, Edad from usuario where Username=S_username;
end $$

delimiter ;

drop procedure if exists update_info_user;

delimiter $$

#actualiza la informacion personal del usuario
create procedure update_info_user (in S_username varchar(30),in N_nombre varchar(20), in N_apellido varchar(20), in N_peso decimal(4,1), in N_altura decimal(3,2), in N_edad tinyint unsigned)
begin
update usuario set Nombre= N_nombre, Apellido = N_apellido, Peso= N_peso, Altura= N_altura, Edad= N_edad where Username=S_username;
end $$

delimiter ;


