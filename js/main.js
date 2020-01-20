// window.onbeforeunload = function() {
//   if (window.scrollTo) window.scrollTo(0, 0);
// };

ScrollReveal().reveal(".about", {
  delay: 100,
  easing: "cubic-bezier(.42, 0, .58, 1)",
  reset: false,
  mobile: true
});
ScrollReveal().reveal(".skills", {
  delay: 125,
  reset: false,
  mobile: true,
  easing: "cubic-bezier(.42, 0, .58, 1)"
});

ScrollReveal().reveal(".resume", {
  delay: 150,
  easing: "cubic-bezier(.42, 0, .58, 1)",
  reset: false,
  mobile: true
});

ScrollReveal().reveal(".projects", {
  delay: 175,
  easing: "cubic-bezier(.42, 0, .58, 1)",
  reset: false,
  mobile: true
});
