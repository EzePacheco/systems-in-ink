const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const header = document.querySelector(".site-header");
const mobileMenu = document.querySelector<HTMLDetailsElement>("[data-mobile-menu]");
const menuSummary = mobileMenu?.querySelector("summary");
mobileMenu?.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => link.addEventListener("click", () => {
  mobileMenu.open = false;
  const target = document.querySelector<HTMLElement>(link.hash);
  if (target) {
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }
}));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu?.open) {
    mobileMenu.open = false;
    menuSummary?.focus();
  }
});
document.addEventListener("click", (event) => {
  if (mobileMenu?.open && event.target instanceof Node && !mobileMenu.contains(event.target)) mobileMenu.open = false;
});
window.matchMedia("(min-width: 881px)").addEventListener("change", (event) => {
  if (event.matches && mobileMenu) mobileMenu.open = false;
});
const syncHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 18);
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

const floatingCv = document.querySelector<HTMLElement>("[data-floating-cv]");
const contactSection = document.querySelector<HTMLElement>("#contacto");
const floatingCvLink = floatingCv?.querySelector<HTMLAnchorElement>("a");
if (floatingCv && contactSection && "IntersectionObserver" in window) {
  let contactIsActive = false;
  const syncFloatingCv = () => {
    const hide = contactIsActive && document.activeElement !== floatingCvLink;
    floatingCv.classList.toggle("is-near-contact", hide);
    floatingCv.setAttribute("aria-hidden", String(hide));
    if (floatingCvLink) floatingCvLink.tabIndex = hide ? -1 : 0;
  };
  floatingCvLink?.addEventListener("blur", syncFloatingCv);
  const contactObserver = new IntersectionObserver(([entry]) => {
    contactIsActive = entry.isIntersecting || entry.boundingClientRect.top < 0;
    syncFloatingCv();
  }, { rootMargin: "-12% 0px -12% 0px" });
  contactObserver.observe(contactSection);
}
document.addEventListener("focusin", (event) => {
  if (event.target instanceof Element) event.target.closest("[data-reveal]")?.classList.add("is-visible");
});

if (!reducedMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("motion-ready");
  requestAnimationFrame(() => document.querySelector(".hero")?.classList.add("is-visible"));
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((target) => {
    const delay = target.getAttribute("data-reveal-delay");
    if (delay) target.style.setProperty("--reveal-delay", `${delay}ms`);
    if (target.getBoundingClientRect().top <= window.innerHeight * 0.92) {
      target.classList.add("is-visible");
      return;
    }
    revealObserver.observe(target);
  });
}
