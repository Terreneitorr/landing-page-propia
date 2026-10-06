export const posts = [
  {
    slug: "primer-post",
    title: "Por qué empecé este devblog",
    excerpt:
      "La idea de documentar lo que voy aprendiendo mientras construyo proyectos, y por qué decidí hacerlo público.",
    content:
      "Este es el primer post del blog. Aquí voy a ir documentando lo que aprendo mientras construyo proyectos: decisiones de arquitectura, errores que cometí y cómo los resolví.\n\nLa idea es simple: escribir para entender mejor, y de paso dejar algo útil para quien lo lea.",
    date: "2026-09-10",
    readingTime: "3 min",
    tags: ["meta"],
    image: "/imagenes/post-inicio.png",
  },
  {
    slug: "como-documente-contrato-api-rest",
    title: "Cómo documenté el contrato de mi API REST",
    excerpt:
      "Tipo de API, protocolo, versión, endpoints, body, respuestas y códigos HTTP — todo lo que documenté antes de escribir una sola línea de código.",
    content:
      "Antes de escribir código, documenté el contrato completo de la API: recurso, método, qué acepta, el body de la petición, la interfaz (JSON), la respuesta, los códigos HTTP posibles y los headers.\n\nEsto evitó que tuviera que rediseñar endpoints a mitad de camino, porque ya sabía exactamente qué forma iba a tener cada respuesta.",
    date: "2026-09-25",
    readingTime: "5 min",
    tags: ["api", "backend"],
    image: "/imagenes/post-api.png",
  },
  {
    slug: "de-wireframe-a-diseno-final",
    title: "De wireframe en escala de grises a diseño terminado",
    excerpt:
      "El proceso de ir del maquetado sin color a definir la paleta, tipografía y componentes finales en Figma.",
    content:
      "Empecé maquetando todo en escala de grises para enfocarme solo en la estructura: qué va arriba, qué se repite, dónde va el foco de atención.\n\nDespués de validar esa estructura, recién ahí definí color, tipografía y componentes. Separar esas dos etapas ayudó a no mezclar decisiones de layout con decisiones de estilo.",
    date: "2026-10-01",
    readingTime: "4 min",
    tags: ["diseño", "proceso"],
    image: "/imagenes/post-wireframe.png",
  },
];
