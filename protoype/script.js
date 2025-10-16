let taches = document.querySelectorAll(".tache"); 
let compteur = document.getElementById("compteur");

taches.forEach(function(tache) {
  tache.addEventListener("click", calcul);
});

function calcul() {
  let total = 0;

  taches.forEach(function(tache) {
    if (tache.checked) total++;
  });

  compteur.innerText = total;
}