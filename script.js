gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);

gsap.fromTo(
  ".logo",
  {
    y: -50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 4,
    delay: 4,
  }
);

gsap.fromTo(
  ".name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 4,
    delay: 4,
  }
);

function redirect() {
  setTimeout(function() {
    window.location.replace('https://nagnathfinance.in/');
  }, 20000); // 20 seconds delay
}

redirect();