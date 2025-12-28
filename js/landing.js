const translations = {
  es: {
    hero_title: "Tu landing diseñada para atraer clientes por WhatsApp",
    hero_subtitle: "Página clara, directa y lista en pocos días. Sin complicaciones técnicas.",
    hero_btn: "Quiero mi landing ahora",

    for_title: "¿Esto es para ti?",
    for_1: "Terapeutas o coaches que quieren captar clientes sin complicaciones técnicas",
    for_2: "Profesionales que necesitan una página clara para mostrar su servicio",
    for_3: "Personas que prefieren comunicarse directamente por WhatsApp",

    about_title: "Sobre TechLARC",
    about_text:
      "Creamos landing pages estáticas, simples y enfocadas en conversión. Nuestro proceso es rápido y centrado en WhatsApp para que empieces a recibir consultas cuanto antes.",

    method_title: "Cómo trabajamos",
    method_1: "Entrega en un máximo de 5 días hábiles desde la recepción del material",
    method_2: "Todo el proceso se coordina exclusivamente por WhatsApp",
    method_3: "Páginas web estáticas (sin bases de datos ni funciones avanzadas)",
    method_4: "Personalización adicional disponible con costo extra",
    method_5: "Revisión mediante enlace temporal antes de subir a tu hosting",

    pricing_title: "Tarifas aproximadas",
    pricing_text:
      "Los precios pueden ajustarse según el alcance del proyecto. Escríbeme para una cotización exacta.",
    pricing_1: "🌐 Página One-Page: desde $150.000 COP (~45 USD)",
    pricing_2: "📄 Página con varias secciones: desde $400.000 COP (~125 USD)",
    pricing_3: "➕ Extras: SEO básico, diseño gráfico, redes sociales",

    cta_title: "¿Lista para lanzar tu landing?",
    cta_subtitle: "Sin compromiso. Evaluamos si tu proyecto encaja.",
    cta_btn: "👉 Hablar por WhatsApp",

    wa_message: `Hola 👋
Vi tu landing de TechLARC y quiero información.

1️⃣ Tipo de proyecto:
( ) One-page
( ) Varias secciones

2️⃣ ¿En qué etapa estás?
( ) Tengo claro el contenido
( ) Tengo una idea, necesito guía
( ) Solo estoy explorando

3️⃣ ¿Cuándo te gustaría lanzar?
( ) 1–2 semanas
( ) Este mes
( ) Más adelante

Gracias 🙂`

  },

  en: {
    hero_title: "A landing page designed to attract clients via WhatsApp",
    hero_subtitle: "Clear, simple and ready in just a few days. No technical headaches.",
    hero_btn: "Get my landing now",

    for_title: "Is this for you?",
    for_1: "Therapists or coaches who want clients without technical hassle",
    for_2: "Professionals who need a clear page to present their service",
    for_3: "People who prefer direct communication via WhatsApp",

    about_title: "About TechLARC",
    about_text:
      "We build simple, static landing pages focused on conversion. Fast process, WhatsApp-based communication, and ready to launch.",

    method_title: "How we work",
    method_1: "Delivery within 5 business days after receiving content",
    method_2: "All communication handled exclusively via WhatsApp",
    method_3: "Static websites only (no databases or complex features)",
    method_4: "Extra customization available at additional cost",
    method_5: "Preview link provided before final upload",

    pricing_title: "Estimated pricing",
    pricing_text:
      "Final price depends on project scope. Contact me for an exact quote.",
    pricing_1: "🌐 One-Page website: from $45 USD",
    pricing_2: "📄 Multi-section website: from $125 USD",
    pricing_3: "➕ Optional extras: SEO, design, social integration",

    cta_title: "Ready to launch your landing?",
    cta_subtitle: "No strings attached. We’ll see if your project is a good fit.",
    cta_btn: "👉 Chat on WhatsApp",

    wa_message: `Hi 👋
I saw your TechLARC landing and would like more info.

1️⃣ Project type:
( ) One-page
( ) Multi-section

2️⃣ Project stage:
( ) Content ready
( ) I have an idea, need guidance
( ) Just exploring

3️⃣ Desired launch time:
( ) 1–2 weeks
( ) This month
( ) Later

Thanks 🙂`

  }
};

let currentLang = "es";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
}

function detectLanguage() {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) currentLang = savedLang;
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    el.textContent = translations[currentLang][key];
  });

  const btn = document.getElementById("ctaBtn");
  if (btn) btn.textContent = translations[currentLang].cta_btn;
}

function openWhatsApp() {
  const phone = "573504799933"; // TU número real
  const message = translations[currentLang].wa_message;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

detectLanguage();
