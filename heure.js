window.onload = function() {
  function afficherHeure() {
    var heure = new Date();
    var heures = heure.getHours();
    var minutes = heure.getMinutes();
    var secondes = heure.getSeconds();
    var texteHeure = heures + ":" + minutes + ":" + secondes;
    document.getElementById("heure").innerHTML = texteHeure;
  }

  setInterval(afficherHeure, 1000);
};