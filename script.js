const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const newsletterForm = document.querySelector(".newsletter-form");
const slider = document.querySelector("[data-slider]");

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
  const navGroups = Array.from(siteNav.querySelectorAll(".nav-group"));
  const navSubgroups = Array.from(siteNav.querySelectorAll(".nav-subgroup"));
  navGroups.forEach((group) => {
    const trigger = group.querySelector(".nav-link--has-sub");
    if (trigger instanceof HTMLAnchorElement) {
      trigger.setAttribute("aria-expanded", "false");
    }
  });
  navSubgroups.forEach((subgroup) => {
    const trigger = subgroup.querySelector(".nav-subgroup__trigger");
    if (trigger instanceof HTMLAnchorElement) {
      trigger.setAttribute("aria-expanded", "false");
    }
  });

  const collapseGroups = () => {
    navGroups.forEach((group) => {
      group.classList.remove("is-expanded");
      const trigger = group.querySelector(".nav-link--has-sub");
      if (trigger instanceof HTMLAnchorElement) {
        trigger.setAttribute("aria-expanded", "false");
      }
      group.querySelectorAll(".nav-subgroup").forEach((subgroup) => {
        subgroup.classList.remove("is-expanded");
        const subgroupTrigger = subgroup.querySelector(".nav-subgroup__trigger");
        if (subgroupTrigger instanceof HTMLAnchorElement) {
          subgroupTrigger.setAttribute("aria-expanded", "false");
        }
      });
    });
  };

  const closeMenu = () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
    collapseGroups();
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement && event.target.classList.contains("nav-subgroup__trigger") && window.innerWidth <= 760) {
      event.preventDefault();
      const subgroup = event.target.closest(".nav-subgroup");
      if (subgroup instanceof HTMLDivElement) {
        const shouldExpand = !subgroup.classList.contains("is-expanded");
        subgroup.classList.toggle("is-expanded", shouldExpand);
        event.target.setAttribute("aria-expanded", String(shouldExpand));
      }
      return;
    }

    if (event.target instanceof HTMLAnchorElement && event.target.classList.contains("nav-link--has-sub") && window.innerWidth <= 760) {
      event.preventDefault();
      const group = event.target.closest(".nav-group");
      if (group instanceof HTMLDivElement) {
        const shouldExpand = !group.classList.contains("is-expanded");
        collapseGroups();
        if (shouldExpand) {
          group.classList.add("is-expanded");
          event.target.setAttribute("aria-expanded", "true");
        }
      }
      return;
    }

    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}

if (slider) {
  const slides = Array.from(slider.querySelectorAll(".top-slider__slide"));
  const dots = Array.from(slider.querySelectorAll("[data-slider-dot]"));
  let index = 0;
  let timer = null;
  let touchStartX = 0;
  let touchEndX = 0;

  const render = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === index);
      slide.setAttribute("aria-hidden", String(i !== index));
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === index);
      dot.setAttribute("aria-current", String(i === index));
    });
  };

  const start = () => {
    if (timer) return;
    timer = window.setInterval(() => render(index + 1), 4300);
  };

  const stop = () => {
    if (!timer) return;
    window.clearInterval(timer);
    timer = null;
  };

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      render(i);
      stop();
      start();
    });
  });

  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);
  slider.addEventListener("focusin", stop);
  slider.addEventListener("focusout", start);

  slider.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.clientX ?? 0;
  });

  slider.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0]?.clientX ?? 0;
    const delta = touchEndX - touchStartX;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) {
      render(index - 1);
    } else {
      render(index + 1);
    }
    stop();
    start();
  });

  render(0);
  start();
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
