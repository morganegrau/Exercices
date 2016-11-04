$liste = document.getElementById("liste");
tableau = ["Georges", "Bernadette", "Mireille"];

function afficher() {
    elements = "";
    for (i = 0; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    $liste.innerHTML = elements;
}

afficher();