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
    "hero.lead": "I build software in C# / .NET and Python and use large language models (LLMs) in practical solutions.",
    "hero.ctaProjects": "View projects",
    "hero.ctaMail": "Get in touch",
    "hero.ctaPrint": "Download / print CV",
    "hero.metaEdu": "🎓 Computer Science, University of Gdańsk",
    "hero.metaWork": "💼 Freelancing since 2023",

    "profile.text": "Computer Science graduate (BSc and MSc, University of Gdańsk) with hands-on experience building software for businesses as a freelancer. I work with .NET (C#) and Python and use large language models (LLMs) in the solutions I build. I'm looking for a job in a development team where I can grow and deliver working solutions.",

    "exp.role": "Freelance Developer",
    "exp.period": "2023 – Present",
    "exp.project": '<strong>KAMADA</strong> – order management and courier delivery system <span class="muted">(project for a local company)</span>',
    "exp.b1": "Designed and built from scratch a system for handling orders and courier deliveries, including route optimization.",
    "exp.b2": "Modular monolith application on the .NET platform, with a Blazor front end and a PostgreSQL database.",
    "exp.b3": "JWT authentication, CI setup, project documentation.",
    "exp.b4": "Delivered independently, commissioned by a local company.",

    "proj.gluco": "Project with CI, tests, architecture decision records (ADR) and a README.",
    "proj.wipBadge": "In progress",
    "proj.transit": "Project currently in development.",
    "proj.leetcode": "Solutions to algorithmic problems, 350+ commits, regular practice.",
    "proj.mauiTitle": ".NET MAUI apps",
    "proj.maui": "Applications built with .NET MAUI (learning projects).",
    "proj.more": "More on GitHub →",
    "tag.tests": "Tests",
    "tag.algorithms": "Algorithms",
    "tag.ds": "Data structures",

    "skills.langs": "Languages & platforms",
    "skills.web": "Web & UI",
    "skills.db": "Databases",
    "skills.llm": "Using LLMs in applications",
    "skills.ai": "AI & LLM",
    "skills.ollama": "Ollama / local models",
    "skills.devops": "DevOps & cloud",
    "skills.tools": "IDEs & tools",
    "skills.other": "Other",
    "skills.algo": "Algorithms & data structures",
    "skills.modular": "Modular system design",

    "edu.ug": "University of Gdańsk",
    "edu.msc": "Computer Science, Master's degree",
    "edu.bsc": "Computer Science, Bachelor's degree",
    "edu.tech": "IT Technical Secondary School",

    "langs.title": "Languages",
    "langs.pl": "Polish",
    "langs.native": "native",
    "langs.en": "English",

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
