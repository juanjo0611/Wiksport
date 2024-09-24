USE Proyecto_Estructuras;

INSERT INTO Usuario (Username, contrasenia, Imagen, Nombre, Apellido, Peso, Altura, Edad)
VALUES 
  ('Anfelesan', 'monkey', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLZr3_SOoBxE5kIj-AzuPU0rhXYbOLcxLjA&s', 'Andres', 'Sanchez', 50, 1.60, 19),
  ('Juanjo', 'qwerty', 'https://i.pinimg.com/736x/be/7a/e0/be7ae06405b93b8284cfaeec037253e5.jpg', 'Juan', 'Mora', 70, 1.70, 18),
  ('admin', 'whatever', 'https://cdn-icons-png.flaticon.com/512/9703/9703596.png', 'NoName', 'NoLastName', 60, 1.60, 19 );

INSERT INTO Ejercicio (Nombre_ejercicio, Dificultad, Categoria, Descripcion, Musculo, Imagen)
VALUES
-- -- Fuerza:Pierna ----
  ('Sentadilla', 7, 'Fuerza', 'Ejercicio de pierna que involucra bajar y subir flexionando las rodillas.', 'Cuádriceps, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Zancadas', 6, 'Fuerza', 'Paso adelante flexionando ambas rodillas, cargando el peso sobre la pierna.', 'Cuádriceps, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Hip thrust', 7, 'Fuerza', 'Levantamiento de la cadera con una barra apoyada sobre las piernas, trabajando principalmente glúteos.', 'Glúteos, Isquiotibiales', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Prensa', 6, 'Fuerza', 'Ejercicio en máquina donde se empuja un peso con las piernas desde una posición sentada.', 'Cuádriceps, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Peso muerto sumo', 7, 'Fuerza', 'Variante del peso muerto con las piernas abiertas en postura sumo, enfatizando glúteos.', 'Glúteos, Espalda baja', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Peso muerto', 9, 'Fuerza', 'Levantar una barra desde el suelo con la espalda recta, usando principalmente las piernas.', 'Espalda baja, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),

-- -- Fuerza:Push ----
  ('Press de banca', 6, 'Fuerza', 'Levantamiento de barra desde una posición acostada para trabajar el pecho.', 'Pectoral', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Press inclinado con barra', 7, 'Fuerza', 'Levantamiento de barra en un banco inclinado, para trabajar la parte superior del pecho.', 'Pectorales superiores', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Fondos', 8, 'Fuerza', 'Levantamiento del cuerpo en paralelas, con énfasis en pecho y tríceps.', 'Pectorales, Tríceps', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Flexiones de pecho', 5, 'Fuerza', 'Levantamiento del cuerpo desde el suelo apoyado solo en manos y pies.', 'Pectorales, Tríceps', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Press militar', 7, 'Fuerza', 'Levantamiento de mancuernas sobre la cabeza desde una posición sentada o de pie.', 'Deltoides', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Dominadas', 8, 'Fuerza', 'Levantarse colgado de una barra usando la fuerza de la espalda', 'Dorsales, Bíceps', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Aperturas con mancuernas', 5, 'Fuerza', 'Apertura y cierre de los brazos con mancuernas desde una posición acostada, enfocando en el pecho.', 'Pectorales', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),

  -- -- Fuerza:Pull ----
  ('Remo en polea baja ', 6, 'Fuerza', 'Ejercicio en máquina donde se tira de un cable desde una posición sentada.', 'Dorsales, Romboides', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Remo con barra', 8, 'Fuerza', 'Levantar una barra hacia el abdomen desde una posición inclinada hacia adelante.', 'Dorsales, Trapecios', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Curl de biceps con mancuerna', 3, 'Fuerza', 'Flexión de codo para levantar una mancuerna, trabajando el bíceps.', 'Bíceps', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Curl Araña con barra', 6, 'Fuerza', 'Ejercicio que se realiza con una inclinación hacia adelante, apoyando los brazos y levantando la barra, enfatizando la contracción del bíceps.', 'Biceps', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Curl Zottman', 8, 'Fuerza', 'Ejercicio de bíceps donde se levanta una mancuerna con agarre supino y se baja con agarre prono, trabajando también los antebrazos.', 'Biceps, Antebrazos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),

-- -- Resistencia ----
  ('Paseo del granjero', 6, 'Resistencia', 'Caminar cargando pesas pesadas en ambas manos.', 'Espalda, Piernas', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Plancha', 5, 'Resistencia', 'Mantener el cuerpo en línea recta apoyado sobre los antebrazos y pies.', 'Abdominales', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Sentadilla isométrica',6 , 'Resistencia', '	Mantener una posición de sentadilla sin moverse, con las rodillas flexionadas a 90°.', 'Cuádriceps, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Puente de glúteos', 4, 'Resistencia', 'Levantar la pelvis manteniendo los hombros apoyados en el suelo, fortaleciendo los glúteos y espalda baja.', 'Glúteos, Espalda baja', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Superman', 4, 'Resistencia', 'Acostado boca abajo, elevar simultáneamente los brazos y las piernas.', 'Espalda baja, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Fondos en silla', 5, 'Resistencia', '	Apoyando las manos en una silla, bajar y subir el cuerpo flexionando los codos, trabajando los tríceps.', 'Tríceps, Deltoides', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),

-- -- Cardio ----
  ('Burpees', 7, 'Cardio', 'Combinación de sentadilla, flexión y salto, realizado de manera rápida.', 'Todo el cuerpo', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Correr', 4, 'Cardio', 'Ejercicio cardiovascular básico que consiste en trotar o correr a velocidad constante.', 'Piernas', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Saltar la cuerda', 6, 'Cardio', 'Saltar una cuerda girada con las manos a alta velocidad.', 'Piernas, Hombros', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Mountain Climbers', 6, 'Cardio', 'Desde una posición de plancha, llevar las rodillas alternadamente hacia el pecho rápidamente.', 'Core, Piernas', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Jumping Jacks', 5, 'Cardio', 'Saltos en los que se abren las piernas y se elevan los brazos simultáneamente.', 'Piernas, Brazos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),
  ('Ciclismo', 7, 'Cardio', 'Pedalear una bicicleta a ritmo constante, ideal para mejorar el acondicionamiento cardiovascular.', 'Piernas', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg');

INSERT INTO Rutina (Nombre_rutina, Nivel, Tiempo_descanzo_serie, Tiempo_descanzo_ejercicio)
VALUES
  ('Pull', 'intermedio', 100, 80),
  ('Push', 'intermedio', 100, 80),
  ('Pierna', 'intermedio', 100, 80),
  ('Cardio', 'intermedio', 100, 80);

INSERT INTO Rutina_ejercicio (Id_rutina, Id_ejercicio, Posicion, Cantidad_series, Tipo_ejecucion, Cantidad_ejercicios)
VALUES
  (1, 14, 0, 4, 'R', 4),
  (1, 15, 1, 4, 'R', 4),
  (1, 16, 2, 4, 'R', 4),
  (1, 17, 3, 4, 'R', 4),
  (2, 7, 0, 4, 'R', 4),
  (2, 8, 1, 4, 'R', 4),
  (2, 9, 2, 4, 'R', 4),
  (2, 10, 3, 4, 'R', 4),
  (3, 1, 0, 4, 'R', 4),
  (3, 2, 1, 4, 'R', 4),
  (3, 3, 2, 4, 'R', 4),
  (3, 4, 3, 4, 'R', 4);
-- INSERT INTO Ejercicio (Nombre_ejercicio, Dificultad, Categoria, Descripcion, Musculo, Imagen) VALUES -- -- Fuerza:Pierna ----   ('Sentadilla', 7, 'Fuerza', 'Ejercicio de pierna que involucra bajar y subir flexionando las rodillas.', 'Cuádriceps, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Zancadas', 6, 'Fuerza', 'Paso adelante flexionando ambas rodillas, cargando el peso sobre la pierna.', 'Cuádriceps, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Hip thrust', 7, 'Fuerza', 'Levantamiento de la cadera con una barra apoyada sobre las piernas, trabajando principalmente glúteos.', 'Glúteos, Isquiotibiales', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Prensa', 6, 'Fuerza', 'Ejercicio en máquina donde se empuja un peso con las piernas desde una posición sentada.', 'Cuádriceps, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Peso muerto sumo', 7, 'Fuerza', 'Variante del peso muerto con las piernas abiertas en postura sumo, enfatizando glúteos.', 'Glúteos, Espalda baja', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Peso muerto', 9, 'Fuerza', 'Levantar una barra desde el suelo con la espalda recta, usando principalmente las piernas.', 'Espalda baja, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),  -- -- Fuerza:Push ----   ('Press de banca', 6, 'Fuerza', 'Levantamiento de barra desde una posición acostada para trabajar el pecho.', 'Pectoral', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Press inclinado con barra', 7, 'Fuerza', 'Levantamiento de barra en un banco inclinado, para trabajar la parte superior del pecho.', 'Pectorales superiores', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Fondos', 8, 'Fuerza', 'Levantamiento del cuerpo en paralelas, con énfasis en pecho y tríceps.', 'Pectorales, Tríceps', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Flexiones de pecho', 5, 'Fuerza', 'Levantamiento del cuerpo desde el suelo apoyado solo en manos y pies.', 'Pectorales, Tríceps', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Press militar', 7, 'Fuerza', 'Levantamiento de mancuernas sobre la cabeza desde una posición sentada o de pie.', 'Deltoides', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Dominadas', 8, 'Fuerza', 'Levantarse colgado de una barra usando la fuerza de la espalda', 'Dorsales, Bíceps', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Aperturas con mancuernas', 5, 'Fuerza', 'Apertura y cierre de los brazos con mancuernas desde una posición acostada, enfocando en el pecho.', 'Pectorales', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),    -- -- Fuerza:Pull ----   ('Remo en polea baja ', 6, 'Fuerza', 'Ejercicio en máquina donde se tira de un cable desde una posición sentada.', 'Dorsales, Romboides', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Remo con barra', 8, 'Fuerza', 'Levantar una barra hacia el abdomen desde una posición inclinada hacia adelante.', 'Dorsales, Trapecios', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Curl de biceps con mancuerna', 3, 'Fuerza', 'Flexión de codo para levantar una mancuerna, trabajando el bíceps.', 'Bíceps', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-15785612...
