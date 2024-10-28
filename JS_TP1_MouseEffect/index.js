// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const rond1 = document.querySelector(".rond1");
const rond2 = document.querySelector(".rond2");
const rond3 = document.querySelector(".rond3");
window.addEventListener("mousemove", (e) => {
  rond1.style.top = `${e.pageY}px`;
  rond1.style.left = `${e.pageX}px`;

  rond2.style.top = `${e.pageY}px`;
  rond2.style.left = `${e.pageX}px`;

  rond3.style.top = `${e.pageY}px`;
  rond3.style.left = `${e.pageX}px`;
});
