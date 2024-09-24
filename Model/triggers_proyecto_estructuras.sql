use proyecto_estructuras;

Drop trigger if exists insert_ejercicio_dificultad;
Delimiter $$
create trigger insert_ejercicio_dificultad before insert on ejercicio for each row
begin 
if new.Dificultad < 1 or new.Dificultad > 10 Then 
signal sqlstate '45000' set MESSAGE_TEXT = 'Dificultad invalida';
end if;
end $$
delimiter ;

/*
drop trigger if exists insert_rutina_ejercicio_posicion;
delimiter $$
create trigger insert_rutina_ejercicio_posicion before insert on rutina_ejercicio for each row
begin
declare next_posicion boolean default false;
select true into next_posicion from Rutina_ejercicio where Id_rutina=new.Id_rutina and Posicion = new.Posicion -1 or new.Posicion=1;
if not next_posicion then
signal sqlstate '45000' set MESSAGE_TEXT = 'Se necesitan posiciones concecutivas para insertar ejercicios en una rutina';
end if;
end$$
delimiter ;
*/

drop trigger if exists insert_rutina_ejercicios_cantidad_series;
delimiter $$
create trigger insert_rutina_ejercicios_cantidad_series before insert on rutina_ejercicio for each row
begin
if new.Cantidad_series < 1  Then 
signal sqlstate '45000' set MESSAGE_TEXT = 'Cantidad de series invalida';
end if;
end$$
delimiter ;

drop trigger if exists insert_rutina_ejercicios_cantidad_ejercicios;
delimiter $$
create trigger insert_rutina_ejercicios_cantidad_ejercicios before insert on rutina_ejercicio for each row
begin
if new.Cantidad_ejercicios < 1  Then 
signal sqlstate '45000' set MESSAGE_TEXT = 'Cantidad de ejercicios invalida';
end if;
end$$
delimiter ;

drop trigger if exists delete_rutina;

delimiter $$
create trigger delete_rutina before delete on rutina for each row
begin
Delete from rutina_ejercicio where Id_rutina=old.Id_rutina;
delete from rutina_programada where Id_rutina=old.Id_rutina;
end$$
delimiter ;

drop trigger if exists insert_rutina_programada_fecha;
delimiter $$
create trigger insert_rutina_programada_fecha before insert on rutina_programada for each row
begin
if curdate() > new.Fecha then
signal sqlstate '45000' set message_text = 'Fecha invalida';
end if;
end$$
delimiter ;


