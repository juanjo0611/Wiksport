USE proyecto_estructuras;
drop procedure if exists create_user;
Delimiter $$
# crea un usuario se le pason los datos basicos del usuario
CREATE procedure create_user (IN N_username varchar(30), IN N_contrasenia varchar(50),IN N_imagen text,in N_nombre varchar(20),IN N_apellido varchar(20),in N_peso decimal(4,1),in N_altura decimal(3,2),IN N_edad tinyint unsigned)
BEgin
insert into Usuario (Username,contrasenia,Imagen,Nombre,Apellido,Peso,Altura,Edad) values (N_username,N_contrasenia,N_imagen,N_nombre,N_apellido,N_peso,N_altura,N_edad);
End $$
delimiter ;

-- call create_user("ju", "1","jj","a","aa",10.2,1.25,14);
-- call create_user("j", "1","jj","a","aa",10.2,1.25,14);
-- select * from usuario;

drop function if exists login_user;
delimiter $$
# verifica que el usuario exista y esa sea su contraseña, devuelve un true si con el usuario y contraseña se puede iniciar una secion
Create  function login_user (N_username varchar(30),N_contrasenia varchar(50)) returns boolean deterministic
begin
declare user_exists boolean default false;
select true into user_exists from Usuario where Username = N_username and contrasenia = N_contrasenia;
return user_exists;
end $$
delimiter ;

-- select login_user ("ju","0"); -- devuelve 1 o 0 dependiendo si es true o false

drop procedure if exists login;
delimiter $$
create procedure login (IN N_username varchar(30))
begin
select Username, constrasenia from usuario where Username=N_username;
end $$
delimiter ;

-- insert into ejercicio values (1, "test",5,"a","ss","kkw");

drop procedure if exists search_ejercicios;
delimiter $$
# busca ejercicios
create procedure search_ejercicios()
begin 
select * from ejercicio ;
end $$
delimiter ;

-- call search_ejercicios();

drop procedure if exists search_one_ejercicio;
delimiter $$
# busca los datos de un ejercicio
create procedure search_one_ejercicio(IN S_id_ejercicio int)
begin 
select * from ejercicio where Id_ejercicio = S_id_ejercicio;
end $$
delimiter ;

-- call search_one_ejercicio (1);

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
            'Imagen',Imagen,
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

-- select ejercicios_rutina(1);

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
select Id_rutina, Nombre_rutina, Nivel, Tiempo_descanzo_serie, Tiempo_descanzo_ejercicio, ejercicios_rutina(Id_rutina) as ejercicios from rutina where Id_usuario = S_id_usuario or (Id_usuario is Null and S_id_usuario is Null);
end $$
delimiter ;

-- select * from rutina;
-- call search_rutina(null);

drop procedure if exists search_one_rutina;
delimiter $$
-- busca info de una sola rutina
create procedure search_one_rutina(IN S_id_rutina int)
begin
select Id_rutina, Nombre_rutina, Nivel, Tiempo_descanzo_serie, Tiempo_descanzo_ejercicio, ejercicios_rutina(S_id_rutina) from rutina where Id_rutina=S_id_rutina;
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

-- call create_rutina("a","principiante",5,5,null);
-- select * from rutina;

drop procedure if exists asociar_rutina_ejercicio;
delimiter $$
-- asocia un ejercicio a una rutina, la numeracion de posicion de los ejercicios comienza en 1 y se le tiene que pasar en orden de posicion
create procedure asociar_rutina_ejercicio (in N_id_rutina int,in N_id_ejercicio int,in N_posicion smallint unsigned,in N_cantidad_series smallint unsigned,
in N_tipo_ejecucion enum('T','R'),in N_cantidad_ejercicios smallint unsigned)
Begin
insert into rutina_ejercicio values (N_id_rutina,N_id_ejercicio,N_posicion,N_cantidad_series,N_tipo_ejecucion,N_cantidad_ejercicios);
End$$
delimiter ;

-- call asociar_rutina_ejercicio(1,1,1,1,"T",1);

-- select * from rutina_ejercicio;

drop procedure if exists drop_rutina;
delimiter $$
create procedure drop_rutina (IN E_id_rutina int)
begin 
delete from rutina where Id_rutina=E_id_rutina;
end$$
delimiter ;

-- call drop_rutina(2);

drop procedure if exists clonar_rutina;
delimiter $$
-- clona una rutina especificada para que se asocie con un usuario especeficado
create procedure clonar_rutina (in S_id_rutina int, in S_username varchar(30))
begin
declare S_id_usuario int;
declare N_id_rutina int;
set S_id_usuario =(select Id_usuario from usuario where Username=S_username);
insert into rutina(Nombre_rutina, Nivel, Tiempo_descanzo_serie, Tiempo_descanzo_ejercicio, Id_usuario) (select Nombre_rutina,Nivel, Tiempo_descanzo_serie, Tiempo_descanzo_ejercicio,S_id_usuario from rutina where Id_rutina=S_id_rutina); 
set N_id_rutina = (select max(Id_rutina)from rutina);
-- set N_id_rutina = LAST_INSERT_ID();
INSERT INTO rutina_ejercicio
    SELECT N_id_rutina, Id_ejercicio, Posicion, Cantidad_series, Tipo_ejecucion, Cantidad_ejercicios
    FROM rutina_ejercicio
    WHERE Id_rutina = S_id_rutina
    ORDER BY Posicion;
end $$
delimiter ;

-- call clonar_rutina(1,"j");

-- select * from rutina;
-- select * from rutina_ejercicio;

drop procedure if exists info_user;
delimiter $$
#da la info de un nombre de usuario
create procedure info_user (in S_username varchar(30))
begin
select Id_usuario, Username, Imagen,Nombre, Apellido, Peso, Altura, Edad from usuario where Username=S_username;
end $$
delimiter ;

-- call info_user("j");

drop procedure if exists programar_rutina;
delimiter $$
-- se agenda una rutina para una fecha especifica
create procedure programar_rutina (in N_id_rutina int, in N_fecha date)
begin
insert into rutina_programada(Id_rutina, Fecha) values (N_id_rutina, N_fecha);
end $$
delimiter ;



drop procedure if exists rutinas_mes;
delimiter $$
-- devuelve todas las rutinas del mes programadas por un usuario en especificp
create procedure rutinas_mes (in S_username varchar(30))
begin 
declare actual int;
declare S_id_usuario int;
set actual= month(curdate());
set S_id_usuario = (select Id_usuario from usuario where Username = S_username);
select Id_rutina, Nombre_rutina, Fecha from (select Id_rutina, Nombre_rutina from rutina where Id_usuario=S_id_usuario) as r Natural join rutina_programada where month(Fecha)=actual order by Fecha;
end $$
delimiter ;




