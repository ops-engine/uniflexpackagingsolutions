const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const newsletterForm = document.querySelector(".newsletter-form");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (siteNav) {
  const currentPath = window.location.pathname.replace(/\/+$/, "");
  const currentFile = currentPath.split("/").filter(Boolean).pop() || "index.html";
  const currentHash = window.location.hash;
  const navGroups = Array.from(siteNav.querySelectorAll(".nav-group"));

  const clearCurrentState = () => {
    siteNav.querySelectorAll("[aria-current='page']").forEach((link) => {
      link.removeAttribute("aria-current");
    });
    siteNav.querySelectorAll(".nav-group.is-current").forEach((group) => {
      group.classList.remove("is-current");
    });
  };

  const setCurrentLink = (selector) => {
    const link = siteNav.querySelector(selector);
    if (link instanceof HTMLAnchorElement) {
      link.setAttribute("aria-current", "page");
    }
  };

  const setCurrentGroupByHref = (hrefSuffix) => {
    const group = navGroups.find((item) => {
      const trigger = item.querySelector(".nav-link");
      return trigger instanceof HTMLAnchorElement && trigger.getAttribute("href")?.endsWith(hrefSuffix);
    });
    if (group instanceof HTMLDivElement) {
      group.classList.add("is-current");
    }
  };

  clearCurrentState();

  if (currentPath.includes("/pouches/")) {
    setCurrentGroupByHref("pouches/index.html");
  } else if (currentFile === "about.html") {
    setCurrentGroupByHref("about.html");
  } else if (currentFile === "industries.html") {
    setCurrentGroupByHref("industries.html");
  } else if (currentFile === "gallery.html") {
    setCurrentLink(".site-nav > .nav-link[href$='gallery.html']");
  } else if (currentFile === "contact.html") {
    setCurrentLink(".site-nav > .nav-link[href$='contact.html']");
  } else if (
    currentFile === "index.html" &&
    ["#solutions", "#gravure", "#digital", "#specialty"].includes(currentHash)
  ) {
    setCurrentGroupByHref("#solutions");
  } else {
    setCurrentLink(".site-nav > .nav-link[href$='index.html']");
  }
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
