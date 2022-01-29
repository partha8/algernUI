const showMenu = (headerToggle, navbarId) => {
  const toggleBtn = document.getElementById(headerToggle);
  const nav = document.getElementById(navbarId);

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("show-menu");

      toggleBtn.classList.toggle("bx-x");
    });
  }
};

showMenu("header-toggle", "navbar");
