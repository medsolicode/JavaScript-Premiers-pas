let taches = document.querySelectorAll(".tache");
let compteur = document.getElementById("compteur");
taches.forEach(t => t.onclick = () => {     
  compteur.innerText = document.querySelectorAll(".tache:checked").length;
});



