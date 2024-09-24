CREATE SCHEMA IF NOT EXISTS Proyecto_Estructuras;
USE Proyecto_Estructuras;

Drop table if exists Rutina_ejercicio;
Drop table if exists Rutina_programada;
Drop table if exists Rutina;
Drop table if exists Ejercicio;
DROP TABLE IF EXISTS Usuario;


CREATE TABLE Usuario(
Id_usuario INT auto_increment,
Username varchar(30) UNIQUE NOT NULL,
contrasenia varchar(50) NOT NULL,
Imagen text,
Nombre varchar(20) not null,
Apellido varchar(20) not null,
Peso decimal(4,1) unsigned not null,
Altura decimal(3,2) unsigned not null,
Edad tinyint unsigned not null,
PRIMARY KEY(Id_usuario)
);

Create table Rutina (
Id_rutina int auto_increment,
Nombre_rutina varchar(60) not null,
Nivel enum("principiante", "intermedio", "avanzado") not null,
Tiempo_descanzo_serie smallint unsigned not null,
Tiempo_descanzo_ejercicio smallint unsigned not null,
Id_usuario int default NULL,
Primary key (Id_rutina),
constraint Rutina_id_usuario foreign key (Id_usuario) references Usuario(Id_usuario)
);


create table Ejercicio (
Id_ejercicio int auto_increment,
Nombre_ejercicio varchar(60) not null, # se busca con esto
Imagen text,
Dificultad tinyint unsigned not null, #necesita un trigger
Categoria Varchar(20),
Descripcion text not null,
Musculo Varchar(150) not null,
Primary key(Id_ejercicio)
);


create table Rutina_ejercicio (
Id_rutina int not null,
Id_ejercicio int not null,
Posicion smallint unsigned not null,
Cantidad_series smallint unsigned not null, # puede necesitar un trigger
Tipo_ejecucion enum("T","R") not null,
Cantidad_ejercicios smallint unsigned not null, #puede necesitar un trigger
Primary key(Id_rutina,Id_ejercicio,Posicion),
constraint Rutina_ejecicio_id_rutina foreign key (Id_rutina) references Rutina(Id_rutina),
constraint Rutina_ejecicio_id_ejercicio foreign key (Id_ejercicio) references Ejercicio(Id_ejercicio)
);

create table Rutina_programada (
Id_programacion int auto_increment, 
Id_rutina int, 
Fecha date, 
primary key(Id_programacion),
constraint Rutina_programada_id_rutina foreign key (Id_rutina) references Rutina(Id_rutina)
);





