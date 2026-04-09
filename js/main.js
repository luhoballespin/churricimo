// Animaciones al hacer scroll
const reveal = () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Menú hamburguesa (mobile)
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const setMenuOpen = (open) => {
  if (!menuBtn || !mobileMenu) return;
  mobileMenu.classList.toggle("hidden", !open);
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
};

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");
    setMenuOpen(isHidden);
  });

  // Cerrar al tocar un link del menú
  document.querySelectorAll("#mobileMenu .mobile-link").forEach((a) => {
    a.addEventListener("click", () => setMenuOpen(false));
  });

  // Cerrar con Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenuOpen(false);
  });

  // Si se pasa a desktop, cerrar menú mobile
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) setMenuOpen(false);
  });
}
