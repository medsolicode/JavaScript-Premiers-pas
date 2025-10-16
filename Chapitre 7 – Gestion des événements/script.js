let bouton = document.getElementById("item1");
let champNom = document.getElementById("item2");
let formulaire = document.getElementById("form");

bouton.addEventListener("click", function() {
  console.log("Le bouton a été cliqué !");
});

champNom.addEventListener("input", function() {
  console.log("Texte saisi : " + champNom.value);
});

formulaire.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("Formulaire soumis avec le nom : " + champNom.value);
});