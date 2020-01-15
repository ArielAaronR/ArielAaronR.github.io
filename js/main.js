// window.onbeforeunload = function() {
//   if (window.scrollTo) window.scrollTo(0, 0);
// };

ScrollReveal().reveal(".about", {
  delay: 600,
  easing: "cubic-bezier(.42, 0, .58, 1)",
  reset: false,
  mobile: true
});
ScrollReveal().reveal(".skills", {
  delay: 700,
  reset: false,
  mobile: true,
  easing: "cubic-bezier(.42, 0, .58, 1)"
});

ScrollReveal().reveal(".resume", {
  delay: 800,
  easing: "cubic-bezier(.42, 0, .58, 1)",
  reset: false,
  mobile: true
});

ScrollReveal().reveal(".projects", {
  delay: 900,
  easing: "cubic-bezier(.42, 0, .58, 1)",
  reset: false,
  mobile: true
});
