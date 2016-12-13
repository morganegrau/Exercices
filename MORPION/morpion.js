var $jeu = document.getElementById("jeu");
var $compteur = 0;
var $reinit = document.getElementById("reinit");
var $case = $jeu.children;

function select (e){
	$compteur ++;

if ((e.target.classList != "player2") && (e.target.classList != "player1"))
{

if ($compteur % 2 != 0)
{
    e.target.classList.add("player1");
} 
else {
    e.target.classList.add("player2");
}
win ();
}
}

function restart () {
  for (var i=0 ; i < $case.length; i++)
{
 	if ($case[i].classList.contains("player1")) 
{

	$case[i].classList.remove ("player1");
}
	else {	
	$case[i].classList.remove ("player2");
}
}
}

function win (){
 if (
 // lignes
 	$case[0].classList.contains("player1") && $case[1].classList.contains("player1") && $case[2].classList.contains("player1") ||
 	$case[3].classList.contains("player1") && $case[4].classList.contains("player1") && $case[5].classList.contains("player1") ||
	$case[6].classList.contains("player1") && $case[7].classList.contains("player1") && $case[8].classList.contains("player1") ||
// croix	
	$case[0].classList.contains("player1") && $case[4].classList.contains("player1") && $case[8].classList.contains("player1") ||
	$case[2].classList.contains("player1") && $case[4].classList.contains("player1") && $case[6].classList.contains("player1") ||
// colonnes	
	$case[0].classList.contains("player1") && $case[3].classList.contains("player1") && $case[6].classList.contains("player1") ||
	$case[1].classList.contains("player1") && $case[4].classList.contains("player1") && $case[7].classList.contains("player1") ||
	$case[2].classList.contains("player1") && $case[5].classList.contains("player1") && $case[8].classList.contains("player1"))

{
	 	alert("player 1 Wins");
}
else if (
 // lignes
 	$case[0].classList.contains("player2") && $case[1].classList.contains("player2") && $case[2].classList.contains("player2") ||
 	$case[3].classList.contains("player2") && $case[4].classList.contains("player2") && $case[5].classList.contains("player2") ||
	$case[6].classList.contains("player2") && $case[7].classList.contains("player2") && $case[8].classList.contains("player2") ||
// croix	
	$case[0].classList.contains("player2") && $case[4].classList.contains("player2") && $case[8].classList.contains("player2") ||
	$case[2].classList.contains("player2") && $case[4].classList.contains("player2") && $case[6].classList.contains("player2") ||
// colonnes	
	$case[0].classList.contains("player2") && $case[3].classList.contains("player2") && $case[6].classList.contains("player2") ||
	$case[1].classList.contains("player2") && $case[4].classList.contains("player2") && $case[7].classList.contains("player2") ||
	$case[2].classList.contains("player2") && $case[5].classList.contains("player2") && $case[8].classList.contains("player2"))
{	
	alert("player 2 Wins");
}
}

$jeu.onclick = select;
win ();
noclick ();
$reinit.onclick = restart;$