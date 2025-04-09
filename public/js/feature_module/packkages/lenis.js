// Initialize Lenis
const lenis = new Lenis({
  duration: 2
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
};

export {raf}