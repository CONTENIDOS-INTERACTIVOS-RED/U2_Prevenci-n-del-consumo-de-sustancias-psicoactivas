export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Sustancias psicoactivas en el ámbito laboral',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tipos de sustancias psicoactivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Impacto en el individuo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Impacto en la familia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: ' Impacto en la sociedad',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Costos económicos del consumo de sustancias psicoactivas',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Estigmatización y marginalización social',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Consecuencias a largo plazo, para la sociedad',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Marco legal de las políticas de prevención de consumo de sustancias psicoactivas en el ámbito laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Resolución 089 del 2019 en Colombia: regulación del consumo de sustancias psicoactivas en el ámbito laboral',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La relación de ayuda en el contexto laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Intervención en casos de consumo de sustancias psicoactivas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Programas de ayuda y rehabilitación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Seguimiento y reintegración laboral',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Aplicación de sanciones en casos justificados',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'López-Muñoz, F., González, E., Serrano, M.D., Antequera, R., & Alamo, C.. (2011). Una visión histórica de las drogas de abuso desde la perspectiva criminológica (Parte I). Cuadernos de Medicina Forense, 17(1), 21-33.',
      link:
        'http://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1135-76062011000100005&lng=es&tlng=es',
    },
    {
      referencia:
        'Oficina de Naciones Unidas contra la droga y el delito. OMS. Informe mundial sobre drogas 2016. [Internet]. 2016 [citado 2018 Ene 24].',
      link: 'https://www.unodc.org/doc/wdr2016/WDR_2016_ExSum_spanish.pdf',
    },
    {
      referencia:
        'Ley 1566 de 2012 - Gestor Normativo. (s. f.). Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48678',
    },
    {
      referencia:
        'Ministerio de Justicia y del Derecho Resolución 089 de 2019 Política Integral para la Prevención y Atención al Consumo de Sustancias Psicoactivas. (s. f.).',
      link:
        'https://www.minjusticia.gov.co/Sala-de-prensa/Paginas/Resolucion-089-de-2019-Politica-Integral-para-la-Prevencion-y-Atencion-al-Consumo-de-Sustancias.aspx',
    },
    {
      referencia:
        'Ley 1562 de 2012 - Gestor Normativo. (s. f.). Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48365',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Resolución número 1035 de 2022, por el cual se adopta el Plan Decenal de Salud Pública 2022-2031 con sus capítulos diferenciales: indígena para los pueblos y comunidades indígenas de Colombia, población víctima de conflicto armado, el Pueblo Rrom y la población negra, afrocolombiana, raizal y palenquera',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%201035%20de%202022.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Abstinencia',
      significado:
        'Estado que ocurre cuando una persona deja de consumir una sustancia psicoactiva, causando síntomas físicos o psicológicos.',
    },
    {
      termino: 'Adicción',
      significado:
        'Dependencia física y/o psicológica a una sustancia, que interfiere con la vida cotidiana.',
    },
    {
      termino: 'Alcoholismo',
      significado:
        'Trastorno caracterizado por el consumo excesivo y compulsivo de alcohol.',
    },
    {
      termino: 'Cannabis',
      significado:
        'Droga psicoactiva derivada de la planta Cannabis sativa, que altera la percepción y el estado de ánimo.',
    },
    {
      termino: 'Cocaína',
      significado:
        'Sustancia estimulante que afecta el sistema nervioso central, generando euforia y adicción.',
    },
    {
      termino: 'Drogas',
      significado:
        'Sustancias que alteran la percepción, el estado de ánimo y otras funciones del organismo.',
    },
    {
      termino: 'Dependencia',
      significado:
        'Necesidad compulsiva de consumir una sustancia para funcionar normalmente.',
    },
    {
      termino: 'Efectos secundarios',
      significado:
        'Reacciones no deseadas provocadas por el consumo de sustancias psicoactivas.',
    },
    {
      termino: 'Estupefacientes',
      significado:
        'Sustancias que deprimen el sistema nervioso central y pueden generar adicción.',
    },
    {
      termino: 'Farmacodependencia',
      significado:
        'Estado de dependencia de una sustancia con efectos psicoactivos.',
    },
    {
      termino: 'Heroína',
      significado:
        'Opioide altamente adictivo que produce efectos sedantes y eufóricos.',
    },
    {
      termino: 'Intoxicación',
      significado:
        'Estado producido por el consumo excesivo de sustancias psicoactivas.',
    },
    {
      termino: 'Marihuana',
      significado:
        'Sustancia psicoactiva obtenida del cannabis, con efectos relajantes y eufóricos.',
    },
    {
      termino: 'Metanfetaminas',
      significado:
        'Drogas sintéticas estimulantes que afectan el sistema nervioso central.',
    },
    {
      termino: 'Narcóticos',
      significado:
        'Sustancias que inducen somnolencia y alivian el dolor, algunas con potencial adictivo.',
    },
    {
      termino: 'Opioides',
      significado:
        'Grupo de sustancias derivadas del opio, utilizadas para aliviar el dolor y con alto riesgo de adicción.',
    },
    {
      termino: 'Psicoactivas',
      significado:
        'Sustancias que alteran el funcionamiento del cerebro y modifican la percepción o el comportamiento.',
    },
    {
      termino: 'Rehabilitación',
      significado:
        'Proceso terapéutico para tratar la adicción y ayudar a la recuperación.',
    },
    {
      termino: 'Sobredosis',
      significado:
        'Consumo excesivo de una sustancia, causando efectos tóxicos o letales.',
    },
    {
      termino: 'Tolerancia',
      significado:
        'Necesidad de aumentar la dosis de una sustancia para lograr el mismo efecto.',
    },
  ],
}
