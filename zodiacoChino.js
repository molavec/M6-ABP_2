//const fechasCambio = require('fechas.js');

// Función que recibe una fecha en formato yyyymmdd y devuelve el signo zodiacal chino y una descripción corta
const signoZodiacalChino = (fecha) => {
  // Crear un objeto para guardar el resultado
  let resultado = {
    nombre: "",
    descripcion: ""
  };
  // Extraer el año, el mes y el día de la fecha
  let año = parseInt(fecha.slice(0, 4));
  let mes = parseInt(fecha.slice(4, 6));
  let dia = parseInt(fecha.slice(6, 8));
  // Validar que la fecha sea correcta
  if (año > 0 && mes > 0 && mes < 13 && dia > 0 && dia < 32) {
    // Calcular el signo zodiacal chino según el año
    // Los signos se repiten cada 12 años
    // El año 2020 fue el año de la Rata
    let signo = (año - 2020) % 12;
    // Ajustar el signo según el mes y el día
    // El año nuevo chino no coincide con el gregoriano
    // Por lo tanto, hay que considerar las fechas de cambio
    // Estas son las fechas de cambio desde 2020 hasta 2031
    let fechasCambio = [
      "20200125",
      "20210212",
      "20220201",
      "20230122",
      "20240210",
      "20250129",
      "20260217",
      "20270206",
      "20280126",
      "20290213",
      "20300203",
      "20310123"
    ];
    // Si la fecha es anterior a la fecha de cambio, el signo es el del año anterior
    if (fecha < fechasCambio[año - 2020]) {
      signo--;
    }
    // Si el signo es negativo, se suma 12 para obtener el signo correcto
    if (signo < 0) {
      signo += 12;
    }
    // Asignar el nombre y la descripción del signo según el resultado
    switch (signo) {
      case 0:
        // Rata
        resultado.nombre = "Rata";
        resultado.descripcion = "Es el primer signo del zodiaco chino y se caracteriza por su inteligencia, astucia, sociabilidad y adaptabilidad. Le gusta el dinero, el éxito, la diversión y el amor. Es curioso, creativo y ambicioso, pero también puede ser egoísta, codicioso y manipulador.";
        break;
      case 1:
        // Buey
        resultado.nombre = "Buey";
        resultado.descripcion = "Es el segundo signo del zodiaco chino y se caracteriza por su fuerza, lealtad, paciencia y perseverancia. Le gusta el trabajo, la familia, la estabilidad y el orden. Es honesto, confiable y responsable, pero también puede ser terco, rígido y conservador.";
        break;
      case 2:
        // Tigre
        resultado.nombre = "Tigre";
        resultado.descripcion = "Es el tercer signo del zodiaco chino y se caracteriza por su valentía, liderazgo, carisma y aventura. Le gusta la libertad, el desafío, el cambio y la acción. Es noble, generoso y apasionado, pero también puede ser impulsivo, arrogante y agresivo.";
        break;
      case 3:
        // Conejo
        resultado.nombre = "Conejo";
        resultado.descripcion = "Es el cuarto signo del zodiaco chino y se caracteriza por su sensibilidad, diplomacia, armonía y elegancia. Le gusta la paz, el arte, la comodidad y el romance. Es amable, refinado y prudente, pero también puede ser indeciso, superficial y escapista.";
        break;
      case 4:
        // Dragón
        resultado.nombre = "Dragón";
        resultado.descripcion = "Es el quinto signo del zodiaco chino y se caracteriza por su poder, autoridad, creatividad y nobleza. Le gusta el éxito, el honor, la fama y el respeto. Es magnífico, carismático y original, pero también puede ser orgulloso, dominante y egocéntrico.";
        break;
      case 5:
        // Serpiente
        resultado.nombre = "Serpiente";
        resultado.descripcion = "Es el sexto signo del zodiaco chino y se caracteriza por su sabiduría, misterio, seducción y transformación. Le gusta el conocimiento, el poder, el lujo y el sexo. Es profundo, intuitivo y atractivo, pero también puede ser envidioso, celoso y vengativo.";
        break;
      case 6:
        // Caballo
        resultado.nombre = "Caballo";
        resultado.descripcion = "Es el séptimo signo del zodiaco chino y se caracteriza por su energía, independencia, entusiasmo y libertad. Le gusta viajar, explorar, competir y divertirse. Es alegre, sociable y optimista, pero también puede ser inquieto, impaciente y superficial.";
        break;
      case 7:
        // Cabra
        resultado.nombre = "Cabra";
        resultado.descripcion = "Es el octavo signo del zodiaco chino y se caracteriza por su imaginación, creatividad, empatía y bondad. Le gusta el arte, la naturaleza, la tranquilidad y el afecto. Es dulce, soñador y compasivo, pero también puede ser inseguro, dependiente y pesimista.";
        break;
      case 8:
        // Mono
        resultado.nombre = "Mono";
        resultado.descripcion = "Es el noveno signo del zodiaco chino y se caracteriza por su inteligencia, ingenio, humor y versatilidad. Le gusta aprender, comunicar, innovar y bromear. Es curioso, divertido y hábil, pero también puede ser travieso, mentiroso y egoísta.";
        break;
      case 9:
        // Gallo
        resultado.nombre = "Gallo";
        resultado.descripcion = "Es el décimo signo del zodiaco chino y se caracteriza por su confianza, honestidad, orgullo y lealtad. Le gusta el orden, la limpieza, la justicia y el reconocimiento. Es valiente, sincero y fiel, pero también puede ser vanidoso, crítico y obstinado.";
        break;
      case 10:
        // Perro
        resultado.nombre = "Perro";
        resultado.descripcion = "Es el undécimo signo del zodiaco chino y se caracteriza por su fidelidad, protección, amistad y nobleza. Le gusta la seguridad, la familia, el bienestar y la lealtad. Es bondadoso, leal y valiente, pero también puede ser ansioso, pesimista y desconfiado.";
        break;
      case 11:
        // Cerdo
        resultado.nombre = "Cerdo";
        resultado.descripcion = "Es el duodécimo signo del zodiaco chino y se caracteriza por su generosidad, indulgencia, felicidad y honestidad. Le gusta el placer, el confort, la abundancia y el amor. Es agradable, sincero y alegre, pero también puede ser ingenuo, perezoso y materialista.";
        break;
    }
  } else {
    // Fecha inválida
    resultado.nombre = "Fecha inválida";
    resultado.descripcion = "La fecha que ingresaste no corresponde a ningún signo zodiacal chino. Por favor, verifica que el formato sea yyyymmdd y que los valores sean correctos.";
  }
  // Devolver el resultado
  return resultado;
};


module.exports = signoZodiacalChino;

// const result = signoZodiacalChino('19811117');
// console.log(result);