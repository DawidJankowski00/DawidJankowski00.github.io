// Tłumaczenia strony. Polska wersja jest domyślnie w index.html —
// tutaj są teksty angielskie oraz krótkie polskie teksty używane w JS.
const I18N = {
  pl: {
    "meta.title": "Dawid Jankowski — .NET / Python Developer",
    "aria.theme": "Przełącz motyw",
    "aria.lang": "Switch to English",
    "contact.copied": "Skopiowano ✓",
  },
  en: {
    "meta.title": "Dawid Jankowski — .NET / Python Developer",
    "aria.theme": "Toggle theme",
    "aria.lang": "Przełącz na polski",

    "nav.profile": "Profile",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "hero.hello": "&gt; Hi, I'm",
    "hero.lead": "I build tested web and mobile applications in C# / .NET and Python and integrate large language models (LLMs) into real-world software.",
    "hero.ctaProjects": "View projects",
    "hero.ctaMail": "Get in touch",
    "hero.ctaPrint": "Download / print CV",
    "hero.metaLoc": "📍 Dziemiany, Poland",
    "hero.metaEdu": "🎓 MSc in Computer Science, University of Gdańsk",
    "hero.metaWork": "💼 .NET Developer, KAMADA (2023 – 2026)",

    "profile.text": ".NET (C#) and Python developer with an MSc in Computer Science from the University of Gdańsk. From 2023 to 2026, I single-handedly designed, deployed and maintained a production order management and route optimization system at KAMADA. I build thoroughly tested web and mobile applications (ASP.NET Core, FastAPI, Blazor, .NET MAUI) and integrate LLMs into real-world software (Ollama, OpenAI/Claude API).",

    "exp1.role": ".NET Developer (internal system) / Sales Specialist",
    "exp1.company": '<strong>KAMADA</strong> – manufacturer and retailer of garden furniture, gazebos and canopies <span class="muted">· Dziemiany, Poland</span>',
    "exp1.b1": "Designed, deployed and maintained, on my own, a production system for order management and courier delivery planning, automating the company's logistics processes.",
    "exp1.b2": "Implemented a route optimization module (OSRM, Google Routes, Haversine) and a local AI assistant (Whisper + Ollama) that supports order entry.",
    "exp1.b3": "Managed the company website and provided technical support for sales and customer orders.",
    "exp2.role": "Sales and Production Associate",
    "exp2.company": '<strong>KAMADA</strong> – manufacturer and retailer of garden furniture, gazebos and canopies <span class="muted">· Dziemiany, Poland</span>',
    "exp2.b1": "Sales, direct customer contact and coordination of order fulfilment.",
    "exp2.b2": "Production of garden furniture, gazebos and canopies (gained hands-on knowledge of production and logistics processes that later informed the design of a dedicated IT system).",
    "exp3.role": "IT Intern",
    "exp3.company": '<strong>Dziemiany Municipal Office</strong> <span class="muted">· Dziemiany, Poland</span>',
    "exp3.b1": "Two one-month vocational internships (during technical high school and undergraduate studies).",
    "exp3.b2": "Technical support for office staff, hardware diagnostics and repair, software installation and configuration.",

    "proj.kamadaTitle": "KAMADAv2 (Order and Route System)",
    "proj.kamada": "Refined version of the order management and courier delivery system with route optimization that I built for KAMADA, published without any company data. Modular monolith (8 modules), REST API with JWT, Held–Karp and time-bounded heuristic algorithms with benchmarks, integration tests (Testcontainers) and a local AI assistant (Whisper + Ollama).",
    "proj.gluco": "Web application supporting type 1 diabetes management: CGM sensor data import, analytics and PDF reports, a 30-minute glucose forecast (scikit-learn) and an LLM-based AI assistant (Ollama / Claude API) with 56 evaluation scenarios. Tests (pytest, Hypothesis), strict mypy, CI.",
    "proj.wipBadge": "In progress",
    "proj.transit": "Mobile app (Android / iOS) for outdoor games played using public transport. ASP.NET Core + SignalR game server in Docker, offline message queue, OpenStreetMap-based map and GPS route recording with GPX and GeoJSON export.",
    "proj.leetcode": "Algorithmic problem solutions: 318 unique problems (230 solutions in Python, 158 in C#), 350+ commits of regular practice.",
    "proj.more": "More on GitHub →",
    "tag.algorithms": "Algorithms",

    "skills.langs": "Programming languages",
    "skills.web": "Web & UI",
    "skills.db": "Databases",
    "skills.ai": "AI & LLM",
    "skills.llm": "LLM integration in applications",
    "skills.devops": "Cloud & DevOps",
    "skills.tools": "Tools & other",
    "skills.modular": "Modular system design",
    "skills.algo": "Algorithms and data structures",

    "edu.ug": "University of Gdańsk",
    "edu.msc": "MSc in Computer Science · 2023 – 2026",
    "edu.bsc": "BSc in Computer Science · 2020 – 2023",

    "certs.title": "Certifications",
    "certs.azureIssuer": "Microsoft and LinkedIn",

    "langs.title": "Languages",
    "langs.pl": "Polish",
    "langs.native": "native",
    "langs.en": "English",
    "langs.advanced": "advanced (C1)",

    "contact.text": "I'm looking for a job in a development team — happy to talk.",
    "contact.copy": "Copy e-mail",
    "contact.copied": "Copied ✓",

    "footer.rodo": "I consent to the processing of my personal data for the purposes necessary for the recruitment process in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR).",
  },
};

// Zapamiętanie oryginalnych (polskich) tekstów z HTML przy pierwszym uruchomieniu
document.querySelectorAll("[data-i18n]").forEach((el) => {
  const key = el.dataset.i18n;
  if (!(key in I18N.pl)) I18N.pl[key] = el.innerHTML.trim();
});

let currentLang = "pl";
const t = (key) => I18N[currentLang][key] ?? I18N.pl[key] ?? key;

function setLanguage(lang) {
  currentLang = lang === "en" ? "en" : "pl";
  document.documentElement.lang = currentLang;
  document.title = t("meta.title");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-href]").forEach((el) => {
    el.setAttribute("href", t(el.dataset.i18nHref));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });

  const btn = document.getElementById("langToggle");
  btn.textContent = currentLang === "pl" ? "EN" : "PL";
  btn.setAttribute("aria-label", t("aria.lang"));

  localStorage.setItem("lang", currentLang);
  try {
    const url = new URL(window.location);
    if (currentLang === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    history.replaceState(null, "", url);
  } catch { /* np. przy otwieraniu pliku lokalnie (file://) */ }
}

// Język startowy: ?lang=en w adresie > zapisany wybór > język przeglądarki
(function initLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  const saved = localStorage.getItem("lang");
  const browser = (navigator.language || "pl").toLowerCase().startsWith("pl") ? "pl" : "en";
  setLanguage(fromUrl || saved || browser);
})();

document.getElementById("langToggle").addEventListener("click", () =>
  setLanguage(currentLang === "pl" ? "en" : "pl"));
