// $element = document.getElementById("id-de-lelement-html");
// // ajouter la classe nom-de-la-classe
// $element.classList.add("nom-de-la-classe");
// // retire la classe nom-de-la-classe
// $element.classList.remove("nom-de-la-classe");
// // permute la classe nom-de-la-classe
// $element.classList.toggle("nom-de-la-classe");
// // teste la présence de la classe nom-de-la-classe
// $element.classList.contains("nom-de-la-classe");


$liste = document.getElementById("liste");
$supprime = document.getElementById("supprime");
$tableau = $liste.children;
$restaure = document.getElementById("restaure");

function selectionne(e) {
  // e.target correspond au <li> qui a été cliqué dans le <ul> !
  e.target.classList.toggle("selected");
}

$liste.onclick = selectionne;


function supprimer() 
 {
  for (var i=0 ; i < $tableau.length; i++)
 {
 	if ($tableau[i].className === "selected")
 {	$tableau[i].classList.remove("selected");
 	$tableau[i].classList.add ("masque");
 }
 }
 }

$supprime.onclick = supprimer;

function restaurer ()
{
  for (var i=0 ; i < $tableau.length; i++)
{
	if ($tableau[i].className === "masque")
	{	$tableau[i].classList.remove("masque");
		$tableau[i].classList.add ("restauration");
	}
}	
}
$restaure.onclick = restaurer;