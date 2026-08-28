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

const findUsMap = document.querySelector("[data-find-us-map]");

if (findUsMap instanceof HTMLDivElement && "L" in window) {
  const latA = Number(findUsMap.dataset.mapALat);
  const lngA = Number(findUsMap.dataset.mapALng);
  const latB = Number(findUsMap.dataset.mapBLat);
  const lngB = Number(findUsMap.dataset.mapBLng);
  const titleA = findUsMap.dataset.mapATitle ?? "Location A";
  const titleB = findUsMap.dataset.mapBTitle ?? "Location B";
  const addressA = findUsMap.dataset.mapAAddress ?? "";
  const addressB = findUsMap.dataset.mapBAddress ?? "";

  if ([latA, lngA, latB, lngB].every((value) => Number.isFinite(value))) {
    const leaflet = window.L;
    const map = leaflet.map(findUsMap, { scrollWheelZoom: false });

    leaflet
      .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
      .addTo(map);

    const markerA = leaflet.marker([latA, lngA]).addTo(map);
    markerA.bindPopup(`<strong>${titleA}</strong><p>${addressA}</p>`);

    const markerB = leaflet.marker([latB, lngB]).addTo(map);
    markerB.bindPopup(`<strong>${titleB}</strong><p>${addressB}</p>`);

    const bounds = leaflet.latLngBounds([
      [latA, lngA],
      [latB, lngB],
    ]);

    map.fitBounds(bounds.pad(0.2));
  }
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

const floatingContacts = [
  {
    href: "https://wa.me/919686960545?text=Hello%20Uniflex%20Packaging%20Solutions%2C%20I%20need%20packaging%20details.",
    label: "WhatsApp",
    className: "contact-float__btn--whatsapp",
    iconClass: "ri-whatsapp-line",
  },
  {
    href: "tel:+919686960545",
    label: "Call us",
    className: "contact-float__btn--phone",
    iconClass: "ri-phone-fill",
  },
  {
    href: "mailto:uniflexpackagingsollutions@gmail.com",
    label: "Email us",
    className: "contact-float__btn--email",
    iconClass: "ri-mail-send-line",
  },
];

(() => {
  if (window.__uniflexContactFloatReady) return;

  const storageKey = "uniflex-contact-float-pos";
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const contactFloat = document.createElement("div");
  contactFloat.className = "contact-float";
  contactFloat.setAttribute("aria-label", "Quick contact widget");

  const launcher = document.createElement("button");
  launcher.type = "button";
  launcher.className = "contact-float__launcher";
  launcher.setAttribute("aria-expanded", "false");
  launcher.setAttribute("aria-controls", "contact-float-panel");
  launcher.setAttribute("aria-label", "Open contact options");
  launcher.innerHTML = '<i class="ri-customer-service-2-line" aria-hidden="true"></i>';

  const panel = document.createElement("div");
  panel.id = "contact-float-panel";
  panel.className = "contact-float__panel";
  panel.setAttribute("aria-hidden", "true");

  const collapse = document.createElement("button");
  collapse.type = "button";
  collapse.className = "contact-float__collapse";
  collapse.setAttribute("aria-label", "Close contact options");
  collapse.innerHTML = '<i class="ri-close-line" aria-hidden="true"></i>';

  const actionWrap = document.createElement("div");
  actionWrap.className = "contact-float__actions";

  floatingContacts.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.className = `contact-float__btn ${item.className}`;
    link.setAttribute("aria-label", item.label);
    if (item.href.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    const icon = document.createElement("i");
    icon.className = item.iconClass;
    icon.setAttribute("aria-hidden", "true");
    const text = document.createElement("span");
    text.textContent = item.label;
    link.append(icon, text);
    actionWrap.append(link);
  });

  panel.append(collapse, actionWrap);
  contactFloat.append(panel, launcher);
  document.body.append(contactFloat);

  const drag = {
    active: false,
    didMove: false,
    startY: 0,
    offsetY: 0,
    pointerId: null,
  };

  const applyVerticalPosition = (y) => {
    const maxY = window.innerHeight - contactFloat.offsetHeight - 8;
    const nextY = clamp(y, 8, maxY);
    contactFloat.style.top = `${nextY}px`;
    contactFloat.style.bottom = "auto";
    contactFloat.style.left = "auto";
    contactFloat.classList.add("is-positioned");
  };

  const resetVerticalPosition = () => {
    contactFloat.style.top = "";
    contactFloat.style.bottom = "";
    contactFloat.style.left = "";
    contactFloat.classList.remove("is-positioned", "is-dragging");
  };

  const endDrag = () => {
    drag.active = false;
    drag.pointerId = null;
    contactFloat.classList.remove("is-dragging");
    launcher.style.touchAction = "";
  };

  const setExpanded = (expanded) => {
    launcher.setAttribute("aria-expanded", String(expanded));
    launcher.setAttribute("aria-label", expanded ? "Close contact options" : "Open contact options");
    panel.setAttribute("aria-hidden", String(!expanded));
    contactFloat.classList.toggle("is-open", expanded);
  };

  const ensureVerticalAnchor = () => {
    if (contactFloat.classList.contains("is-positioned")) return;
    applyVerticalPosition(contactFloat.getBoundingClientRect().top);
  };

  const onPointerMove = (event) => {
    if (!drag.active || event.pointerId !== drag.pointerId) return;

    if (Math.abs(event.clientY - drag.startY) > 4) {
      drag.didMove = true;
      contactFloat.classList.add("is-dragging");
    }

    if (!drag.didMove) return;
    event.preventDefault();
    applyVerticalPosition(event.clientY - drag.offsetY);
  };

  const onPointerEnd = (event) => {
    if (event.pointerId !== drag.pointerId) return;

    if (drag.didMove) {
      try {
        const { top } = contactFloat.getBoundingClientRect();
        localStorage.setItem(storageKey, JSON.stringify({ y: top }));
      } catch (_error) {
        // ignore localStorage failures
      }
    }

    endDrag();
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerEnd);
    window.removeEventListener("pointercancel", onPointerEnd);
  };

  const startDrag = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    ensureVerticalAnchor();
    const rect = contactFloat.getBoundingClientRect();
    drag.active = true;
    drag.didMove = false;
    drag.startY = event.clientY;
    drag.offsetY = event.clientY - rect.top;
    drag.pointerId = event.pointerId;
    launcher.style.touchAction = "none";

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerEnd);
    window.addEventListener("pointercancel", onPointerEnd);
  };

  const initPosition = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return;
      const parsed = JSON.parse(saved);
      const y = Number.isFinite(parsed?.y) ? parsed.y : parsed?.top;
      if (!Number.isFinite(y)) return;
      applyVerticalPosition(y);
    } catch (_error) {
      // ignore persisted-position errors
    }
  };

  launcher.addEventListener("pointerdown", (event) => {
    startDrag(event);
  });

  launcher.addEventListener("click", (event) => {
    if (drag.didMove) {
      drag.didMove = false;
      return;
    }
    event.stopPropagation();
    const next = launcher.getAttribute("aria-expanded") !== "true";
    setExpanded(next);
  });

  collapse.addEventListener("click", (event) => {
    event.stopPropagation();
    setExpanded(false);
  });

  document.addEventListener("click", (event) => {
    if (launcher.getAttribute("aria-expanded") !== "true") return;
    if (event.target instanceof Node && contactFloat.contains(event.target)) return;
    setExpanded(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && launcher.getAttribute("aria-expanded") === "true") {
      setExpanded(false);
    }
  });

  window.addEventListener("resize", () => {
    if (!contactFloat.classList.contains("is-positioned")) return;
    applyVerticalPosition(contactFloat.getBoundingClientRect().top);
  });

  requestAnimationFrame(initPosition);

  try {
    localStorage.removeItem("uniflex-contact-float-hidden");
  } catch (_error) {
    // ignore localStorage failures
  }

  window.__uniflexContactFloatReady = true;
})();
