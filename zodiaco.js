// Esta función recibe una fecha en formato yyyymmdd y devuelve un objeto con el nombre y la descripción del signo zodiacal
const obtenerZodiaco = (fecha) => {
  // Extraer el día y el mes de la fecha
  let dia = parseInt(fecha.substring(6, 8));
  let mes = parseInt(fecha.substring(4, 6));
  // Crear un objeto vacío para almacenar el resultado
  let resultado = {};
  // Comparar el día y el mes con los rangos de cada signo zodiacal
  if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
    // Aries
    resultado.nombre = "Aries";
    resultado.descripcion = "Es el primer signo del zodiaco y se caracteriza por su energía, iniciativa, valentía y liderazgo. Le gusta la aventura, el desafío y la competencia. Es impulsivo, directo y honesto, pero también puede ser impaciente, agresivo y egoísta.";
  } else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 21)) {
    // Tauro
    resultado.nombre = "Tauro";
    resultado.descripcion = "Es el segundo signo del zodiaco y se caracteriza por su estabilidad, perseverancia, sensualidad y practicidad. Le gusta la naturaleza, el arte, el confort y la seguridad. Es leal, fiel y generoso, pero también puede ser terco, posesivo y materialista.";
  } else if ((mes == 5 && dia >= 22) || (mes == 6 && dia <= 21)) {
    // Géminis
    resultado.nombre = "Géminis";
    resultado.descripcion = "Es el tercer signo del zodiaco y se caracteriza por su comunicación, curiosidad, versatilidad e inteligencia. Le gusta aprender, viajar, socializar y divertirse. Es ingenioso, adaptable y creativo, pero también puede ser superficial, inconstante y mentiroso.";
  } else if ((mes == 6 && dia >= 22) || (mes == 7 && dia <= 22)) {
    // Cáncer
    resultado.nombre = "Cáncer";
    resultado.descripcion = "Es el cuarto signo del zodiaco y se caracteriza por su sensibilidad, emotividad, intuición y protección. Le gusta la familia, el hogar, la historia y la tradición. Es cariñoso, compasivo y leal, pero también puede ser dependiente, caprichoso y manipulador.";
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 23)) {
    // Leo
    resultado.nombre = "Leo";
    resultado.descripcion = "Es el quinto signo del zodiaco y se caracteriza por su creatividad, generosidad, confianza y carisma. Le gusta el arte, el espectáculo, el lujo y el reconocimiento. Es noble, magnánimo y leal, pero también puede ser arrogante, egocéntrico y autoritario.";
  } else if ((mes == 8 && dia >= 24) || (mes == 9 && dia <= 23)) {
    // Virgo
    resultado.nombre = "Virgo";
    resultado.descripcion = "Es el sexto signo del zodiaco y se caracteriza por su análisis, perfeccionismo, servicio y eficiencia. Le gusta el orden, la limpieza, el trabajo y la salud. Es meticuloso, diligente y humilde, pero también puede ser crítico, exigente y pesimista.";
  } else if ((mes == 9 && dia >= 24) || (mes == 10 && dia <= 23)) {
    // Libra
    resultado.nombre = "Libra";
    resultado.descripcion = "Es el séptimo signo del zodiaco y se caracteriza por su armonía, equilibrio, diplomacia y belleza. Le gusta la paz, la justicia, el arte y las relaciones. Es amable, sociable y elegante, pero también puede ser indeciso, superficial y complaciente.";
  } else if ((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) {
    // Escorpio
    resultado.nombre = "Escorpio";
    resultado.descripcion = "Es el octavo signo del zodiaco y se caracteriza por su intensidad, pasión, misterio y transformación. Le gusta el poder, el sexo, la investigación y el cambio. Es profundo, leal y magnético, pero también puede ser celoso, vengativo y obsesivo.";
  } else if ((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) {
    // Sagitario
    resultado.nombre = "Sagitario";
    resultado.descripcion = "Es el noveno signo del zodiaco y se caracteriza por su optimismo, libertad, aventura y filosofía. Le gusta viajar, aprender, reír y expandir sus horizontes. Es entusiasta, honesto y generoso, pero también puede ser imprudente, irresponsable y exagerado.";
  } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
    // Capricornio
    resultado.nombre = "Capricornio";
    resultado.descripcion = "Es el décimo signo del zodiaco y se caracteriza por su ambición, responsabilidad, disciplina y madurez. Le gusta el éxito, el trabajo, la estabilidad y el prestigio. Es serio, trabajador y prudente, pero también puede ser frío, rígido y pesimista.";
  } else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)) {
    // Acuario
    resultado.nombre = "Acuario";
    resultado.descripcion = "Es el undécimo signo del zodiaco y se caracteriza por su originalidad, independencia, humanidad y progreso. Le gusta la libertad, la amistad, la innovación y la diversidad. Es inteligente, creativo y altruista, pero también puede ser rebelde, excéntrico y distante.";
  } else if ((mes == 2 && dia >= 20) || (mes == 3 && dia <= 20)) {
    // Piscis
    resultado.nombre = "Piscis";
    resultado.descripcion = "Es el duodécimo signo del zodiaco y se caracteriza por su sensibilidad, imaginación, compasión y espiritualidad. Le gusta el arte, la música, el sueño y la magia. Es empático, romántico y soñador, pero también puede ser iluso, escapista y víctima.";
  } else {
    // Fecha inválida
    resultado.nombre = "Fecha inválida";
    resultado.descripcion = "La fecha que ingresaste no corresponde a ningún signo zodiacal. Por favor, verifica que el formato sea yyyymmdd y que los valores sean correctos.";
  }
  // Devolver el resultado
  return resultado;
}

module.exports = obtenerZodiaco;

// const result = obtenerZodiaco('19811117');
// console.log(result);