//  muestra la portada o un estilo de nado y cambia la opción elegida

var nombresOpciones = ['Posición del Cuerpo', 'Brazada', 'Patada', 'Respiración'];

var estilos = {
  crol: {
    nombre: 'Crol (Libre)',
    videos: ['video/crol.mp4', 'video/crol.mp4', 'video/aprendizaje_crol.mp4', 'video/aprendizaje_crol.mp4'],
    textos: [
      'En el crol el cuerpo debe quedar lo más horizontal y alineado posible, como una flecha: cabeza, espalda y piernas en una misma línea. La cabeza se mantiene relajada con la mirada hacia el fondo de la piscina y las caderas cerca de la superficie. Al nadar, el cuerpo rota suavemente hacia cada lado con cada brazada, lo que reduce la resistencia del agua.',
      'Los brazos trabajan de forma alternada. La mano entra al agua delante del hombro, con los dedos primero, y se estira hacia adelante. Luego se hace el agarre con el codo alto y se jala el agua por debajo del cuerpo hasta el muslo. Al salir, el brazo vuelve hacia adelante relajado, con el codo más alto que la mano.',
      'La patada nace en la cadera y no en la rodilla. Las piernas se mueven de forma alterna y continua, casi estiradas, con una pequeña flexión de rodilla y los tobillos sueltos. Los movimientos son cortos y rápidos, y los pies apenas rompen la superficie. Su función es mantener el cuerpo alto y ayudar al equilibrio.',
      'Para respirar se gira la cabeza hacia un lado junto con la rotación del cuerpo, dejando una oreja y media cara en el agua. Se toma aire por la boca y, cuando la cara regresa al agua, se exhala de forma continua por la nariz y la boca. Se puede respirar cada dos o tres brazadas, alternando los lados para equilibrar la técnica.'
    ]
  },
  espalda: {
    nombre: 'Espalda',
    videos: ['video/espalda.mp4', 'video/espalda.mp4', 'video/espalda.mp4', 'video/aprendizaje_espalda.mp4'],
    textos: [
      'En espalda se nada boca arriba, con el cuerpo extendido y horizontal en la superficie. La cabeza descansa en el agua con los oídos sumergidos y la mirada hacia arriba, el abdomen firme y las caderas altas para no hundirse. El cuerpo gira un poco de lado a lado con cada brazada.',
      'Los brazos se mueven de forma alterna. La mano entra al agua por detrás de la cabeza, con el brazo estirado y el dedo meñique primero. Después se dobla el codo para jalar el agua hacia el muslo y se empuja al final. El brazo sale del agua y vuelve en un arco, estirado y vertical, hacia el siguiente ingreso.',
      'La patada es alterna, similar a la del crol, pero boca arriba. Sale de la cadera, con las piernas casi estiradas y los tobillos sueltos. Los pies deben agitar la superficie sin sacar las rodillas del agua. Es una patada constante que mantiene las piernas arriba y da equilibrio al nadador.',
      'Como la cara está fuera del agua, la respiración es más libre y natural. Lo importante es mantener un ritmo regular: se inhala durante una brazada y se exhala durante la siguiente. No se debe aguantar el aire, porque esto genera tensión y hace perder la posición.'
    ]
  },
  pecho: {
    nombre: 'Pecho',
    videos: ['video/pecho.mp4', 'video/pecho.mp4', 'video/pecho.mp4', 'video/pecho.mp4'],
    textos: [
      'En pecho el cuerpo se mantiene boca abajo y tiene un movimiento ondulante: en cada ciclo el pecho sube para respirar y luego se vuelve a estirar para deslizar. Entre un ciclo y otro, el cuerpo queda extendido, con los brazos adelante y las piernas juntas, para aprovechar el impulso.',
      'Los brazos se mueven al mismo tiempo. Desde adelante, las manos se abren hacia afuera con las palmas mirando afuera, luego se jala hacia atrás y adentro, sin pasar la línea de los hombros, hasta juntar las manos debajo del mentón. Por último, los brazos se estiran hacia adelante, cerca de la superficie, para volver a deslizar.',
      'La patada de pecho se parece a la de una rana. Se flexionan las rodillas llevando los talones hacia los glúteos, los pies se giran hacia afuera y se empuja el agua hacia atrás en un movimiento circular hasta juntar las piernas estiradas. Después viene un breve deslizamiento. Es el estilo en que la patada da más impulso.',
      'La respiración está unida a la brazada. Al jalar con los brazos, la cabeza y los hombros salen del agua y se toma aire por la boca. Al estirar los brazos hacia adelante, la cara vuelve al agua y se exhala de forma continua. Se respira una vez en cada ciclo completo.'
    ]
  },
  mariposa: {
    nombre: 'Mariposa',
    videos: ['video/mariposa.mp4', 'video/mariposa.mp4', 'video/mariposa.mp4', 'video/mariposa.mp4'],
    textos: [
      'La mariposa se basa en una onda que recorre todo el cuerpo, como un delfín. Con cada ciclo, la cabeza y el pecho bajan y suben, y las caderas se mueven en sentido contrario. El cuerpo no se mantiene rígido: el movimiento nace en el pecho y termina en los pies, y esa ondulación continua ayuda a avanzar.',
      'Los dos brazos se mueven a la vez. Entran al agua al ancho de los hombros, jalan hacia afuera y luego hacia adentro, bajo el cuerpo, en forma de ojo de cerradura, y terminan el empuje junto a los muslos. Los brazos salen del agua y pasan hacia adelante casi estirados, de forma relajada, por encima de la superficie.',
      'Se usa la patada de delfín: las dos piernas se mueven juntas y con los pies estirados, haciendo un movimiento de látigo que viene del pecho y las caderas. En cada ciclo de brazos se dan dos patadas: una cuando las manos entran al agua y otra cuando salen al final del empuje.',
      'La respiración es frontal. Al terminar el empuje de los brazos, se levanta la cabeza hacia adelante, con el mentón cerca de la superficie, y se toma aire por la boca. Enseguida la cabeza vuelve al agua, antes de que los brazos entren. Se puede respirar en cada ciclo o cada dos ciclos, evitando levantar demasiado la cabeza.'
    ]
  }
};

var estiloActual = 'portada';
var opcionActual = 0;

// Muestra la portada o un estilo de nado (se llama desde el menú)
function mostrar(estilo) {
  estiloActual = estilo;
  opcionActual = 0;

  // marcar el botón activo del menú
  var botones = document.querySelectorAll('.boton-menu');
  var orden = ['portada', 'crol', 'espalda', 'pecho', 'mariposa'];
  for (var i = 0; i < botones.length; i++) {
    botones[i].classList.toggle('activo', orden[i] === estilo);
  }

  if (estilo === 'portada') {
    document.getElementById('portada').style.display = 'block';
    document.getElementById('estilo').style.display = 'none';
  } else {
    document.getElementById('portada').style.display = 'none';
    document.getElementById('estilo').style.display = 'block';
    document.getElementById('nombreEstilo').textContent = estilos[estilo].nombre;
    actualizar();
  }
}

// Cambia la opción: Posición del Cuerpo, Brazada, Patada o Respiración
function elegir(numero) {
  opcionActual = numero;
  actualizar();
}

// Pone el video y el párrafo que corresponden
function actualizar() {
  var e = estilos[estiloActual];
  var botones = document.querySelectorAll('.boton-opcion');
  for (var i = 0; i < botones.length; i++) {
    botones[i].classList.toggle('activo', i === opcionActual);
  }
  document.getElementById('nombreOpcion').textContent = nombresOpciones[opcionActual];
  document.getElementById('texto').textContent = e.textos[opcionActual];
  var video = document.getElementById('video');
  var nuevo = e.videos[opcionActual];
  if (video.getAttribute('src') !== nuevo) {
    video.setAttribute('src', nuevo);
  }
}
