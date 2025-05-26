import assets from '@/public/index'; 

export const navs = [
  {
    id: 1,
    name: "Cursos",
    href: "/",
  },
  {
    id: 2,
    name: "Quienes Somos",
    href: "/",
  },
  {
    id: 3,
    name: "Noticias frescas",
    href: "/",
  },
  {
    id: 4,
    name: "#Wearedoers",
    href: "/",
  },
  {
    id: 5,
    name: "Contacto",
    href: "/",
  },
]

export const hero = {
  city: "Madrid",
  subtitle: "Doers School",
  courses: [
    {
      title: "Curso Anual de Creatividad",
      description: ["Hay plazas disponibles.", "¡Apúntate!"],
    },
    {
      title: "Planificación y Estrategia Creativa",
      description: ["Quedan pocas plazas.", "¡No te quedes fuera!"],
    },
  ],
  bannerMessages: [
    "Ver todos los cursos",
    "Ver todos los cursos",
    "Ver todos los cursos",
    "Ver todos los cursos",
    "Ver todos los cursos"
  ],
  highlight: "Últimos<br/>lugares"
};

export const workshops = [
  {
      image: assets.swiper1,
      info: "Curso Anual de creatividad"
  },
  {
      image: assets.swiper2,
      info: "Planificación y Estrategia Creativa 2021"
  },
  {
      image: assets.swiper3,
      info: "PR & Comunicación"
  },
  {
      image: assets.swiper4,
      info: "Digital y Social Media"
  },
  {
      image: assets.swiper5,
      info: "Design Thinking"
  },
  {
      image:assets.swiper6,
      info: "Planificación y Estrategia Creativa"
  },
  {
      image: assets.swiper1,
      info: "Curso Anual de creatividad"
  },
  {
      image: assets.swiper2,
      info: "Planificación y Estrategia Creativa 2021"
  },
  {
      image: assets.swiper3,
      info: "PR & Comunicación"
  },
  {
      image: assets.swiper4,
      info: "Digital y Social Media"
  },
  {
      image: assets.swiper5,
      info: "Design Thinking"
  },
  {
      image:assets.swiper6,
      info: "Planificación y Estrategia Creativa"
  },
]

export const newsData = [
  { image: assets.news1, info: "Chin chin por nuestra plata en el #hackforgood del cdec" },
  { image: assets.news6, info: "Chin chin por nuestra plata en el #hackforgood del cdec" },
  { image: assets.news2, info: "Dos alumnas de Brother crean la primera manifestación feminista en Twich" },
  { image: assets.news5, info: "#PROHIBIDOFIJARCARTELES: UNA NUEVA OPORTUNIDAD PARA EL CARTEL MÁS FEO DEL MUNDO" },
  { image: assets.news3, info: "Brother presenta <Pinta y Colorea>: el ciclo con el mejor talento gráfico en Madrid" },
  { image: assets.news7, info: "Somos la escuela con más finalistas en el Festival CDEC (otra vez ;))" },
  { image: assets.news4, info: "Las nuevas ideas llegan a correos gracias a los alumnos de Brother" },
  { image: assets.news8, info: "Nueva representación del kingdom a cargo del ilustrador asis percalesPlanificación y Estrategia Creativa 2021" }
];

export const footer = {
  links: [
    { label: 'Cursos', href: '/' },
    { label: 'Quiénes somos', href: '/quienes-somos' },
    { label: 'Noticias Frescas', href: '/noticias' },
    { label: '#Wearedoers', href: '/wearedoers' },
    { label: 'Contacto', href: '/contacto' },
  ],
  address: `Calle Gran Vía 27, 28013 Madrid, +34 910 52 66 49 | +34 612 27 84 09 madrid@brotherad.com`,
  year: '2021',
  location: 'Brother Madrid',
  credit: 'Made by 20DEDOS',
}

export const selectOptions = [
  { value: 'Curso de creatividad', label: 'Curso de creatividad' },
  { value: 'Planificación y Estrategia', label: 'Planificación y Estrategia' },
  { value: 'PR & Comunicación', label: 'PR & Comunicación' },
  { value: 'Digital y social media', label: 'Digital y social media' },
];