const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const newsletterForm = document.querySelector(".newsletter-form");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = newsletterForm.querySelector("input[type='email']");

    if (emailInput instanceof HTMLInputElement && emailInput.checkValidity()) {
      newsletterForm.reset();
      newsletterForm.dataset.status = "success";
      newsletterForm.setAttribute("aria-label", "Subscription received");
      alert("Thank you for subscribing to Uniflex Packaging Solutions updates.");
    }
  });
}
