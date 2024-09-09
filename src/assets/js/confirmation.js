/*Animation de réservation*/
// Fonction pour démarrer l'animation de confettis
function startConfetti() {
  const duration = 5 * 1000; // 5 secondes
  const end = Date.now() + duration;

  const canvas = document.getElementById("confetti-canvas");
  const myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true,
  });

  (function frame() {
    myConfetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    myConfetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

console.log("Salut");
// Démarrer les confettis après que la page ait été complètement chargée
window.addEventListener("load", startConfetti);
