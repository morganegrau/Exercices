// EXERCICES JS

// 1) Ecrire un script qui affiche le message "Hello World !" dans une boite de dialogue.

// alert ("Hello world");


// 2) Ecrire un script qui affiche un bouton sur la page. Lorsque le bouton est pressé, une boîte de
// dialogue apparaît avec le message "Hello World !"

// function myFunction() {
//     alert("Hello World");
// }

// 3) Demander le nom de l'utilisateur au chargement de la page. Demander ensuite une
// confirmation du nom de l'utilisateur. Si le nom est confirmé, afficher ce dernier dans une
// boîte de dialogue


// name = prompt('Bonjour, entrez votre prénom');

// var verif = prompt("Entrez de nouveau votre prénom");
// var ok = verif;

// 	if (name == verif)
// 	{
// 		alert (ok);	
// 	}


// 4)Fournir un commentaire selon l'âge de la personne. Vous devez fournir un commentaire sur
// 4 tranches d'âge différentes qui sont les suivantes :
// Exemple de commentaire
// 1 à 17 ans "Vous n'êtes pas encore majeur."
// 18 à 49 ans "Vous êtes majeur mais pas encore senior."
// 50 à 59 ans "Vous êtes senior mais pas encore retraité."
// 60 à 120 ans "Vous êtes retraité, profitez de votre temps libre !"
// Le déroulement du code sera le suivant :
// 1-L'utilisateur charge la page web.
// 2-Il est ensuite invité à taper son âge dans une fenêtre d'interaction.
// 3-Une fois l'âge fourni l'utilisateur obtient un petit commentaire.

// age = prompt('Bonjour, entrez votre âge');

// var mineur="Vous n'êtes pas encore majeur.";
// var medium="Vous êtes majeur mais pas encore senior.";
// var senior="Vous êtes senior mais pas encore retraité.";
// var retraite="Vous êtes retraité, profitez de votre temps libre !"

// if (age < 17)
// {
// 	alert (mineur);
// }

// if (age >17 && age <49)
// {
// 	alert (medium)
// }

// if (age >50 && age <59)
// {
// 	alert (senior)
// }
// if (age >60 && age <120)
// {
// 	alert (retraite)
// }


// 5)Ecrire une page HTML contenant un formulaire. Ce formulaire contient un bouton. Le click sur
// le bouton engendre la modification de la couleur de l’arrière plan de la page. Utiliser la
// commande suivante : document.bgColor= ‘’#FFFggF’’

// function modif()
// {
// document.bgColor="#fffggf";
// }

// 6)Vous avez une page avec un formulaire et un champ. Écrivez un script qui va valider le formulaire. 
// Si le champ est vide, un message d'erreur est affiché à côté du champ et le formulaire n'est pas 
// envoyé. Si le champ contient des données, le formulaire peut être envoyé. 

// function Verifier_formulaire(formulaire){
//   if (formulaire.champs_obligatoire.value==""){
//     alert ("Vous avez oublié de remplir le champs obligatoire");
//   }else{
//     alert ("Le champs obligatoire est bien rempli, on soumet le formulaire");
//     formulaire.submit();
//   }
// }


// EXERCICE DU "PLUS OU MOINS"

// $proposition = document.getElementById("proposition");
// $bouton = document.getElementById("bouton");
// $resultat = document.getElementById("resultat");
// reponse = Math.ceil(Math.random() * 100)
// compteur = 0

// function verifier() {
//     if ($proposition.value < reponse) {
//         $resultat.innerHTML = "Insuffisant !"
//         compteur +=1;
//     }
//     if ($proposition.value == reponse) {
//         $resultat.innerHTML = "Juste ce qu'il faut"
//         compteur +=1
// 	alert("Tu as gagné en " + compteur + " coups !");
//     }
//     if ($proposition.value > reponse) {
//         $resultat.innerHTML = "Trop !"
//         compteur +=1;
//     }
// }
// $bouton.onclick = verifier;


// JEU DES BÂTONNETS

// $affichage = document.getElementById("affichage");
// $combien = document.getElementById("combien");
// $bouton = document.getElementById("bouton");
// // Nombre de bâtons actuellement sur le jeu
// nb = 25;
// // Affiche les 'nb' bâtons dans la <div id="affichage"></div>
// function afficher() {
//     batons = "";
//     for (i = 0; i < nb; i++) {
//         batons += "| ";
//     }
//     $affichage.innerHTML = batons;
// }
// // Affiche les bâtons de départ
// afficher();
// // Retire autant de bâtons que la valeur du champ texte
// function retirer() {
//     nb -= parseInt($combien.value);
//     // Met à jour les bâtons affichés
//     afficher()
//     if (nb == 1){
// 	alert ("La partie est terminée")
// };
// }

// // On appelle la fonction de retrait quand on click sur le bouton
// $bouton.onclick = retirer;