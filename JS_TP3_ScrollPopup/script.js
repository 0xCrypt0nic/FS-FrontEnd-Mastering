// Créer un événement au scroll
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

let popupClosed = false;

window.addEventListener("scroll", () => {
  navbar.style.height = window.scrollY == 0 ? "90px" : "45px";

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  // Faire apparaitre l'image de la partie improvise
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "translateX(0px)";
  } else {
    imgImprovise.style.opacity = 0;
    imgImprovise.style.transform = "translateX(-200px)";
  }

  // Faire apparaitre la popup quand on est en bas du site
  if (scrollValue > 0.8 && !popupClosed) {
    popup.style.opacity = 1;
    popup.style.transform = "translateX(0px)";
    console.log(popup);
  }

  // Bonus : quand on clicke sur la popup elle disparait pour toujours
  closeBtn.addEventListener("click", () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(400px)";
    popupClosed = true;
  });
});
