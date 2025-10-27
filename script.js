// --- PREGUNTAS ---
const preguntas = [
  {
    texto: "Si hemos de abrir un establecimiento en Cataluña, como por ejemplo un taller de reparación de automóviles, como mínimo, ¿a qué normativa estaremos sometidos obligatoriamente?",
    opciones: [
      "a) A la Ley 16/2002 de Prevención y Control Integrados de la Contaminación.",
      "b) A la Ley 21/1990 de Intervención Integral de la Administración Ambiental (IIAA).",
      "c) Al Decreto 2414/1961 que publica el Reglamento de Actividades Molestas, Insalubres, Nocivas y Peligrosas.",
      "d) A la Ley 20/2009 de Prevención y Control Ambiental de las Actividades (PCAA)."
    ],
    correcta: "d"
  },
  {
    texto: "Señala la respuesta correcta:",
    opciones: [
      "a) Los escenarios futuros de clima predicen más situaciones extremas en términos de frío.",
      "b) Los modelos de predicción climática a escala regional ofrecen una menor precisión que los modelos globales.",
      "c) Se prevé un incremento mayor de temperatura bajo el escenario SSP5-8.5 que en el escenario SSP1-1.9.",
      "d) En la subregión Mediterránea, se prevé un incremento de la precipitación a finales de siglo."
    ],
    correcta: "c"
  },
  {
    texto: "Señala la respuesta falsa:",
    opciones: [
      "a) El Mecanismo de Aplicación Conjunta pone en contacto países en vías de desarrollo y países ya desarrollados.",
      "b) El Comercio de Emisiones existe tanto a nivel de países como de instalaciones.",
      "c) Los países en vías de desarrollo no están obligados a implementar Mecanismos de Desarrollo Limpio.",
      "d) Tanto en el Mecanismo de Aplicación Conjunta como en el Mecanismo de Desarrollo Limpio, la reducción de emisiones se calcula a partir de las que se producirían en ausencia de la actividad proyectada."
    ],
    correcta: "a"
  },
  {
    texto: "En el marco del concepto de 'Desarrollo sostenible', ¿cuál de las siguientes respuestas es falsa?",
    opciones: [
      "a) La satisfacción de las necesidades provoca una presión exponencial sobre los recursos.",
      "b) El desarrollo sostenible se realiza a través del consumo de bienes y servicios.",
      "c) Para ser sostenible, se deben satisfacer las necesidades del presente aun comprometiendo la capacidad de las generaciones futuras para atender sus propias necesidades.",
      "d) La elasticidad de los factores implica suplir el agotamiento de materias primas por una mayor inversión que permita aumentar la eficiencia de los recursos o encontrar materiales sustitutivos."
    ],
    correcta: "c"
  },
  {
    texto: "¿Cuál de las siguientes afirmaciones es correcta?",
    opciones: [
      "a) El Protocolo de Kioto todavía está vigente.",
      "b) El Protocolo de Kioto entró en vigor cuando lo firmaron 55 países representando el 55% de las emisiones de gases de efecto invernadero emitidas en el año 1990.",
      "c) El Protocolo de Kioto regula sólo las emisiones de CO2.",
      "d) El Acuerdo de París ratificado el 2016 tiene como objetivo la reducción de las emisiones de gases de efecto invernadero en un 100% el 2030."
    ],
    correcta: "b"
  },
    {
    texto: "En el marco del Análisis de Ciclo de Vida, señala la respuesta correcta:",
    opciones: [
      "a) La identificación y cuantificación de las entradas y salidas de cada proceso unitario forma parte de la etapa de análisis de inventario.",
      "b) La asignación de pesos (weighting) a las diferentes categorías de impacto se lleva a cabo mediante un proceso científico.",
      "c) La definición de los límites del sistema se realiza durante la etapa de análisis del inventario.",
      "d) Un aspecto incluido en el inventario sólo puede contribuir a una categoría de impacto ambiental, no a entre otras."
    ],
    correcta: "a"
  },
  {
    texto: "En el marco de los Análisis de Ciclo de Vida, la caracterización:",
    opciones: [
      "a) es una etapa del análisis de inventario.",
      "b) transforma los datos recogidos en el inventario en diferentes categorías de impacto utilizando factores de conversión científicos.",
      "c) identifica las principales categorías de impactos ambientales.",
      "d) clasifica los impactos ambientales en impactos locales, regionales o globales."
    ],
    correcta: "b"
  },
  {
    texto: "Respecto a los regímenes de intervención administrativa de la Ley de Prevención y Control Ambiental de las Actividades, ¿cuál de las siguientes afirmaciones es falsa?",
    opciones: [
      "a) En el Anexo I.1, puede iniciarse la actividad inmediatamente después de haberse presentado el proyecto bajo la responsabilidad del propietario y del técnico.",
      "b) Las actividades del Anexo I.1 están sometidas a control cada 4 años.",
      "c) Las actividades del Anexo I.1 están sujetas a renovación cuando lo solicite el organismo ambiental competente, de acuerdo con la publicación de las conclusiones relativas a las Mejores Técnicas Disponibles.",
      "d) Las actividades del Anexo I.1 están sujetas al Régimen de autorización ambiental con declaración de impacto ambiental."
    ],
    correcta: "a"
  },
    {
    texto: "¿Cuál de las siguientes afirmaciones es correcta?",
    opciones: [
      "a) La huella ecológica mide la máxima población de una especie concreta que puede ser soportada por un hábitat determinado.",
      "b) La capacidad de carga representa la superficie de terreno o de agua ecológicamente productiva necesarios para generar los recursos y asimilar los residuos de una población determinada.",
      "c) En España existe un superávit ecológico.",
      "d) Todas las respuestas anteriores son falsas."
    ],
    correcta: "b"
  },
  {
    texto: "¿Cuál de las siguientes afirmaciones es falsa?",
    opciones: [
      "a) Los Sistemas de Gestión Ambiental se aplican a productos.",
      "b) Los Sistemas de Gestión Ambiental deben ser revisados periódicamente.",
      "c) Tener un Sistema de Gestión Ambiental es voluntario.",
      "d) El ahorro de recursos es una motivación para la implantación de Sistemas de Gestión Ambiental."
    ],
    correcta: "a"
  },
  {
    texto: "En el marco de los Análisis de Ciclo de Vida, señala la respuesta correcta:",
    opciones: [
      "a) El calentamiento global, el agotamiento de la capa de ozono, la acidificación y la eutrofización, entre otras, categorías de impacto incluidas dentro de un Análisis de Ciclo de Vida.",
      "b) La acidificación es un impacto regional.",
      "c) El factor de caracterización para el calentamiento global es el Potencial de Calentamiento Global (GWP, Global Warming Potential).",
      "d) Todas las respuestas son correctas."
    ],
    correcta: "d"
  },
  {
    texto: "En relación al Análisis de Ciclo de Vida de las placas solares fotovoltaicas, señala la respuesta correcta:",
    opciones: [
      "a) Las placas solares fotovoltaicas consumen más energía durante su fabricación que la que proporcionan durante su vida útil.",
      "b) El análisis sobre la rentabilidad energética de las placas solares debe tener en cuenta la ubicación de las mismas.",
      "c) En el Análisis de Ciclo de Vida de las placas solares fotovoltaicas no se tuvo que realizar ninguna hipótesis porque todos los datos eran conocidos.",
      "d) Ninguna de las anteriores, todas son falsas."
    ],
    correcta: "b"
  },
  {
    texto: "Señala la respuesta correcta:",
    opciones: [
      "a) El impacto de la eutrofización es a nivel mundial.",
      "b) La acidificación implica niveles altos de pH en la atmósfera.",
      "c) Los anticiclones prolongados contribuyen a aumentar el impacto del smog en las ciudades.",
      "d) El agujero de la capa de ozono no tiene vía de solución."
    ],
    correcta: "c"
  }
  {
    texto: "De acuerdo con la Directiva 2010/75/EC sobre Emisiones Industriales, señala la respuesta falsa:",
    opciones: [
      "a) Los Valores Límite de Emisión (VLE) pueden definirse como la concentración y/o la masa de sustancias contaminantes contenidas en las emisiones procedentes de instalaciones.",
      "b) Los Valores Límite de Emisión permitidos se fijan en los Anexos de la Directiva IPPC.",
      "c) Los documentos técnicos de referencia para los distintos sectores industriales se denominan BREF.",
      "d) La publicación de los BREF tiene como objetivo dar a conocer las BAT o MTD (Mejores Técnicas Disponibles)."
    ],
    correcta: "b"
  },
  {
    texto: "¿Cuál de las siguientes afirmaciones es cierta?",
    opciones: [
      "a) Los Sistemas de Gestión Ambiental están basados en el ciclo de Meadows.",
      "b) Los Sistemas de Gestión Ambiental no solo deben centrarse en los impactos ambientales habituales de la zona de producción, sino también en los producidos en otros espacios auxiliares.",
      "c) Las empresas del Anexo II que disponen de un Sistema de Gestión Ambiental están exentas de los controles establecidos por la Ley 20/2009 (PCAA).",
      "d) La empresa que obtiene un Sistema de Gestión Ambiental demuestra que no contamina."
    ],
    correcta: "b"
  },
  {
    texto: "Señala la respuesta falsa:",
    opciones: [
      "a) Solo las industrias manufactureras pueden implementar un sistema de gestión ambiental.",
      "b) El número de empresas certificadas con ISO 14001 es mucho mayor que el número de empresas registradas con un sistema EMAS.",
      "c) El promotor del Reglamento EMAS es la administración pública (Unión Europea).",
      "d) La adopción de la norma ISO 14001 es voluntaria."
    ],
    correcta: "a"
  },
  {
    texto: "Señala la respuesta verdadera:",
    opciones: [
      "a) Una actividad que emite por encima del Valor Límite de Emisión es ilegal.",
      "b) Una actividad que emite por encima del valor umbral fijado en el Portal de Emisiones Industriales no es legal.",
      "c) De acuerdo con la Directiva de Emisiones Industriales, una nueva actividad debe adoptar un enfoque basado en la reacción a la contaminación.",
      "d) La última actualización de la Directiva sobre Emisiones Industriales introduce incentivos fiscales para aquellas industrias que logren reducir sus emisiones por debajo de los límites establecidos."
    ],
    correcta: "a"
  },
  {
    texto: "¿Cuál de los siguientes elementos es una parte fundamental de la fase de Act (actuar) en un Sistema de Gestión Ambiental (SGA)?",
    opciones: [
      "a) Evaluación de riesgos y oportunidades.",
      "b) Definición de roles y responsabilidades.",
      "c) Análisis de los costes de implementación del Sistema de Gestión Ambiental.",
      "d) Revisión del desempeño del SGA y la adecuación de las políticas y objetivos ambientales."
    ],
    correcta: "d"
  },
  {
    texto: "¿Cuál de los siguientes pasos es esencial en la fase de 'Evaluación de Impacto' de un Análisis de Ciclo de Vida (ACV)?",
    opciones: [
      "a) Establecer los objetivos y alcance del estudio.",
      "b) Identificar y cuantificar los impactos ambientales potenciales.",
      "c) Recopilar datos sobre las entradas y salidas del sistema.",
      "d) Interpretar los resultados y tomar decisiones basadas en ellos."
    ],
    correcta: "b"
  },
  {
    texto: "¿Cuál de las siguientes afirmaciones es falsa?",
    opciones: [
      "a) La capa de ozono no tiene relación directa con el cambio climático.",
      "b) La capa de ozono es una región de la atmósfera que protege la Tierra de la radiación solar ultravioleta.",
      "c) La capa de ozono regula la temperatura global del planeta y es esencial para prevenir el cambio climático.",
      "d) La degradación de la capa de ozono es causada principalmente por los clorofluorocarbonos (CFCs) liberados por actividades humanas."
    ],
    correcta: "c"
  }
];

// --- FRASES DE ÁNIMO ---
const frases_animo = [
  "¡Muy bien amor! 😎",
  "¡Eso es, perfecto, te camelo caramelo! 🔥",
  "¡Ole tú huevos! 💪",
  "¡Exacto, estás on fire tia! 🚀",
  "¡Qué máquina eres! 😍",
  "¡Correcto, así se hace! 👏",
  "¡Te lo sabes de memoria ya! 💥"
];

// --- VARIABLES ---
let i = 0;
let puntuacion = 0;

// --- FUNCIONES ---
function mostrarMensaje(texto, tipo) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.classList.add("message", tipo);
  msg.textContent = texto;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function mostrarPregunta() {
  if (!preguntas[i]) return;

  const p = preguntas[i];
  mostrarMensaje(p.texto, "bot");
  p.opciones.forEach(op => mostrarMensaje(op, "bot"));
}

function responder(opcionElegida) {
  if (!preguntas[i]) return;

  const p = preguntas[i];
  mostrarMensaje(`Has elegido: ${opcionElegida.toUpperCase()}`, "user");

  if (opcionElegida === p.correcta) {
    puntuacion++;
    mostrarMensaje(frases_animo[Math.floor(Math.random() * frases_animo.length)], "bot");
  } else {
    mostrarMensaje(`❌ Incorrecto. La respuesta correcta era ${p.correcta.toUpperCase()}.`, "bot");
  }

  i++;
  if (i < preguntas.length) {
    setTimeout(mostrarPregunta, 800);
  } else {
    setTimeout(() => {
      mostrarMensaje(`🏁 Has acertado ${puntuacion} de ${preguntas.length} preguntas. 💡`, "bot");
      desactivarBotones();
    }, 800);
  }
}

function desactivarBotones() {
  document.querySelectorAll(".btn-opcion").forEach(btn => btn.disabled = true);
}

// --- ARRANQUE ---
document.addEventListener("DOMContentLoaded", () => {
  i = 0;
  puntuacion = 0;
  mostrarMensaje("🧠 Bienvenido al test. Pulsa A, B, C o D para responder 💬", "bot");
  setTimeout(mostrarPregunta, 500);

  document.getElementById("btnA").onclick = () => responder("a");
  document.getElementById("btnB").onclick = () => responder("b");
  document.getElementById("btnC").onclick = () => responder("c");
  document.getElementById("btnD").onclick = () => responder("d");
});


