$liste = document.getElementById("liste");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$numero = document.getElementById("numero");
$ajouter = document.getElementById("ajouter");
$recherche = document.getElementById("recherche");
$rechercher = document.getElementById("rechercher");
$resultatRecherche = document.getElementById("resultatRecherche");

contacts = [{
    prenom: "Momo",
    nom: "Grillot",
    numero: "0123456789"
}, {
    prenom: "Riri",
    nom: "Smith",
    numero: "0123456789"
}];
function texteContact(contact) {
return contact.prenom + " " + contact.nom + " (" + contact.numero + ")";
}
alert(texteContact(contacts[0])); // affiche « Julien Grillot (0123456789) »

function afficher() {
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
}



function ajout(contact){
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        numero: $numero.value
    });
    afficher();
}

$ajouter.onclick = ajout;
afficher();




function rechercher() {

}

$ajouter.onclick = ajout;
$rechercher.onclick = rechercher;
afficher();
