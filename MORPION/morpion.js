var $jeu = document.getElementById("jeu");
var $compteur = 0;
var $reinit = document.getElementById("reinit");
var $case = $jeu.children;
var $x1y1 = document.getElementById("x1y1");
var $x1y2 = document.getElementById("x1y2");
var $x1y3 = document.getElementById("x1y3");
var $x2y1 = document.getElementById("x2y1");
var $x2y2 = document.getElementById("x2y2");
var $x2y3 = document.getElementById("x2y3");
var $x3y1 = document.getElementById("x3y1");
var $x3y2 = document.getElementById("x3y2");
var $x3y3 = document.getElementById("x3y3");

// function select (e)
//  {
// 	e.target.classList.add("selected")
//  	alert(e.target.id);
// }


// $jeu.onclick = select;


function select (e){
	$compteur ++;

if ($compteur % 2) 
{
    e.target.classList.add("player1");
} 
else {
    e.target.classList.add("player2");
}
}

win ();

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
  for (var i=0 ; i < $case.length; i++)
{
 if ($case[0].classList.contains("player1") && $case[1].classList.contains("player1") && $case[2].classList.contains("player1"))
{
        alert(" player1 Wins");
}

	 if ($case[3].classList.contains("player1") && $case[4].classList.contains("player1") && $case[5].classList.contains("player1"))
{
	 	alert(" player1 Wins");
}
}
}


win ();
$jeu.onclick = select;
$reinit.onclick = restart;
