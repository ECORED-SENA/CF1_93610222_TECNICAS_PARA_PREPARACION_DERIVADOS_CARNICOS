export default {
  global: {
    Name: 'Generalidades de la carne',
    Description:
      'El componente formativo aborda la estructura y composición química de la carne, incluyendo tejidos musculares, proteínas, grasas, carbohidratos, vitaminas y minerales. También analiza sus características sensoriales como jugosidad, textura, aroma y sabor, destacando la reacción de Maillard. Además, considera factores que influyen en la calidad, como el pH, maduración y manejo post-mortem.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La carne',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Composición química de la carne',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Proteínas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'El agua',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Grasas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Carbohidratos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Vitaminas',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Minerales',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Características sensoriales de la carne',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Composición química de la carne.',
      referencia:
        'Jose Lobo Gomez. (2021). <i>BROMATOLOGIA: CARNE</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=984v3Rkbyyc&ab_channel=JoseLoboGomez',
    },
    {
      tema: 'Composición química de la carne.',
      referencia: 'Fedecarne (s.f.). <i>Guía nutricional de la carne</i>.',
      tipo: 'Documento',
      link:
        'https://www.fen.org.es/aplicaciones/fedecarne-fen/pdf/guianutricion.pdf',
    },
    {
      tema: 'Características sensoriales de la carne.',
      referencia:
        'Sánchez, I. C., & Albarracín, W. (2010). <i>Análisis sensorial en carne</i>. Revista Colombiana de Ciencias Pecuarias, 23(2), 227-239.',
      tipo: 'Documento ',
      link: 'https://www.redalyc.org/pdf/2950/295023450012.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Carne',
      significado:
        'parte comestible de los músculos de animales como mamíferos, aves y peces, utilizada en la alimentación humana.',
    },
    {
      termino: 'Mioglobina',
      significado:
        'proteína responsable del color rojo de la carne, presente en mayor cantidad en carnes oscuras y animales con más actividad física.',
    },
    {
      termino: 'Colágeno',
      significado:
        'proteína estructural del tejido conectivo que aporta resistencia a los músculos y afecta la textura de la carne.',
    },
    {
      termino: 'Epimisio',
      significado:
        'capa externa del músculo compuesta por tejido conectivo que agrupa las fibras musculares en secciones.',
    },
    {
      termino: 'Reacción de Maillard',
      significado:
        'proceso químico entre proteínas y azúcares que ocurre durante la cocción, generando coloración y aroma en la carne.',
    },
    {
      termino: 'Jugosidad',
      significado:
        'característica sensorial de la carne relacionada con su contenido de agua y grasa, que influye en su percepción al masticarla.',
    },
    {
      termino: 'Textura',
      significado:
        'propiedad de la carne determinada por la cantidad de colágeno, maduración, edad del animal y métodos de cocción.',
    },
    {
      termino: 'Grasas intramusculares',
      significado:
        'lípidos presentes entre las fibras musculares que afectan la jugosidad, sabor y calidad de la carne.',
    },
    {
      termino: 'Proteínas miofibrilares',
      significado:
        'proteínas estructurales del músculo como la actina y la miosina, esenciales para la contracción muscular y retención de agua en la carne.',
    },
    {
      termino: 'Maduración de la carne',
      significado:
        'proceso <i>post-mortem</i> que mejora la ternura y el sabor mediante la acción de enzimas que descomponen las proteínas musculares.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amézquita, A., Arango, C., Restrepo, D. y Restrepo, R. (2001). <i>Industria de carnes</i>. Medellín, Colombia: Universidad Nacional.',
      link: '',
    },
    {
      referencia: 'Fotolia. (s.f.). <i>Carnes</i>. ',
      link: '',
    },
    {
      referencia:
        'Guerrero, I., Hui, Y. y Rosmini, M. (2012). <i>Ciencia y tecnología de la carne</i>. México: Limusa. ',
      link: '',
    },
    {
      referencia:
        'Maya, J. (2010). <i>Manejo y procesamiento de carnes</i>. Pasto, Colombia: Universidad Nacional Abierta y a Distancia. ',
      link: '',
    },
    {
      referencia:
        'Onega, P. (2003). <i>Evaluación de la calidad de carne fresca: aplicación de técnicas analíticas instrumentales y sensoriales</i>. Madrid, España: Universidad Complutense de Madrid. ',
      link: '',
    },
    {
      referencia:
        'Ramírez, R. (2006). <i>Tecnología de cárnicos</i>. Bogotá, Colombia: Universidad Nacional. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
