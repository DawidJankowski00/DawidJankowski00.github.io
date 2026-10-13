// Rok w stopce
document.getElementById("year").textContent = new Date().getFullYear();

// Motyw jasny / ciemny (zapamiętywany w localStorage)
const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved) root.setAttribute("data-theme", saved);
else if (window.matchMedia("(prefers-color-scheme: light)").matches) root.setAttribute("data-theme", "light");

document.getElementById("themeToggle").addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// Menu mobilne
const links = document.getElementById("navLinks");
document.getElementById("burger").addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));

// Animacja pojawiania się sekcji
const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("visible"); revealObserver.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Podświetlanie aktywnej sekcji w menu
const navObserver = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      links.querySelectorAll("a").forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }
  }),
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("section[id]").forEach((s) => navObserver.observe(s));

// Kopiowanie e-maila
const copyBtn = document.getElementById("copyEmail");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("Dawid.Jan.Jankowski00@gmail.com");
    copyBtn.textContent = t("contact.copied");
  } catch {
    copyBtn.textContent = "Dawid.Jan.Jankowski00@gmail.com";
  }
  setTimeout(() => (copyBtn.textContent = t("contact.copy")), 2000);
});

// Przed drukiem pokaż wszystkie sekcje
window.addEventListener("beforeprint", () =>
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible")));
