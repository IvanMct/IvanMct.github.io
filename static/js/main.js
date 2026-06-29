// Highlight active nav link based on scroll position
(function () {
  var sections = document.querySelectorAll(".section, .hero");
  var links = document.querySelectorAll(".nav-links a");
  if (!sections.length || !links.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute("id");
          links.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  sections.forEach(function (s) {
    if (s.id) observer.observe(s);
  });
})();
