const translations = {
  es: {
    /* NAV */
    contact: "Contactar",

    /* HERO */
    badge: "Landing pages profesionales",
    hero_title: "Diseño webs claras y elegantes para negocios que quieren convertir",
    hero_text: "Creo landing pages enfocadas en comunicar tu valor, generar confianza y facilitar el contacto con tus clientes.",
    hero_btn: "Hablar por WhatsApp",

    /* PROBLEMA */
    problem_title: "Una web confusa cuesta clientes",
    problem_text: "Muchos negocios tienen un buen servicio, pero una web que no lo refleja. Diseño landing pages que eliminan el ruido y comunican lo esencial.",

    /* SERVICIO */
    service_title: "El servicio",

    service_1_title: "Landing page personalizada",
    service_1_text: "Una página única, pensada para un solo objetivo: que el visitante entienda tu servicio y te contacte.",

    service_2_title: "Diseño limpio y responsive",
    service_2_text: "Diseño moderno, adaptable a móvil y escritorio, con una estructura clara y profesional.",

    service_3_title: "Entrega rápida",
    service_3_text: "Proceso simple, sin fricción y con tiempos claros desde el inicio.",

    /* PROCESO */
    process_title: "Proceso de trabajo",
    process_1: "<strong>Brief:</strong> entiendo tu negocio y objetivo",
    process_2: "<strong>Diseño:</strong> creo la estructura y el diseño",
    process_3: "<strong>Revisión:</strong> ajustamos detalles",
    process_4: "<strong>Entrega:</strong> web lista para usar",

    /* PORTAFOLIO */
    portfolio_title: "Proyectos",
    portfolio_text: "Selección de trabajos enfocados en claridad, estructura y experiencia.",
    portfolio_btn: "Ver portafolio",

    /* CTA */
    cta_title: "¿Hablamos?",
    cta_text: "Si necesitas una landing page profesional para tu negocio, escríbeme y vemos si encajamos.",
    cta_btn: "Contactar por WhatsApp"
  },

  en: {
    /* NAV */
    contact: "Contact",

    /* HERO */
    badge: "Professional landing pages",
    hero_title: "Clean and elegant websites for businesses that want to convert",
    hero_text: "I design landing pages focused on communicating your value, building trust, and making it easy for clients to contact you.",
    hero_btn: "Chat on WhatsApp",

    /* PROBLEMA */
    problem_title: "A confusing website costs customers",
    problem_text: "Many businesses have a great service, but a website that doesn’t reflect it. I design landing pages that remove noise and communicate what matters.",

    /* SERVICIO */
    service_title: "The service",

    service_1_title: "Custom landing page",
    service_1_text: "A single, focused page designed with one goal: help visitors understand your service and contact you.",

    service_2_title: "Clean & responsive design",
    service_2_text: "Modern design, fully responsive, with a clear and professional structure.",

    service_3_title: "Fast delivery",
    service_3_text: "Simple process, no friction, and clear timelines from day one.",

    /* PROCESO */
    process_title: "Work process",
    process_1: "<strong>Brief:</strong> understanding your business and goals",
    process_2: "<strong>Design:</strong> structure and visual design",
    process_3: "<strong>Review:</strong> refinements and adjustments",
    process_4: "<strong>Delivery:</strong> website ready to use",

    /* PORTAFOLIO */
    portfolio_title: "Projects",
    portfolio_text: "A selection of work focused on clarity, structure, and user experience.",
    portfolio_btn: "View portfolio",

    /* CTA */
    cta_title: "Shall we talk?",
    cta_text: "If you need a professional landing page for your business, message me and let’s see if we’re a good fit.",
    cta_btn: "Contact on WhatsApp"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
  const key = el.getAttribute("data-key");
  if (translations[lang][key]) {
    el.innerHTML = translations[lang][key];
  }
});

  localStorage.setItem("lang", lang);
}

// WhatsApp
function openWhatsApp() {
  window.open(
    "https://wa.me/573001234567?text=Hello%2C%20I%20saw%20your%20TechLarc%20website%20and%20I’m%20interested%20in%20a%20landing%20page.",
    "_blank"
  );
}

// Idioma por defecto
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "es";
  setLang(savedLang);
});