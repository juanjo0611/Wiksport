use proyecto_estructuras;
#drop index  idx_ejercicio_categoria on ejercicio;
create index idx_ejercicio_categoria ON ejercicio(Categoria);
#drop index idx_ejercicio_nombre_ejercicio on ejercicio;
create index idx_ejercicio_nombre_ejercicio on ejercicio(Nombre_ejercicio);