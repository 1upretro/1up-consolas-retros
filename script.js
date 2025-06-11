
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.1,
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 1s ease forwards";
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    section.style.opacity = "0";
    revealOnScroll.observe(section);
  });
});
