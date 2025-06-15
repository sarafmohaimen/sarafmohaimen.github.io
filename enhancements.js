(() => {
  // === 1. Theme Handling ===
  const root = document.documentElement;
  const userPref = localStorage.getItem("theme");
  const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (userPref === "dark" || (!userPref && systemPref)) {
    root.classList.add("dark-mode");
  }

  document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    root.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      root.classList.contains("dark-mode") ? "dark" : "light"
    );
  });

  // === 2. Back-to-Top Button ===
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.createElement("button");
    btn.id = "back-to-top";
    btn.innerText = "↑";
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
      btn.style.display = window.scrollY > 300 ? "block" : "none";
    });
  });

  // === 3. Scroll Reveal Animations ===
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transform = "translateY(40px)";
      section.style.transition = "all 0.6s ease-out";
      observer.observe(section);
    });
  });
})();
