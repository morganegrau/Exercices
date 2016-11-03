var $bouton = document.getElementById("bouton");
var $bouton2 = document.getElementById("bouton2");
var $affichage = document.getElementById("affichage");
var $affichage2 = document.getElementById("affichage2");
var $score = 0;
var $scorebis = 0;
var $compteur =1;
var $incre = 2;
$affichage.innerHTML = $score;


function click (){

$score += $compteur;
$affichage.innerHTML = $score +" élécteurs";	
$scorebis += $compteur;
$affichage2.innerHTML = $scorebis + " élécteurs";

if ($score >= 10) {
    	$score = $score + 2;
}
if ($score >= 13 && $score <= 16) {
    alert("Clinton va gagner !")
}
if ($score >= 20){
	$scorebis = $score;
}

if ($score >= 30){
	$scorebis = $score + 2;
}
if ($scorebis > 22 && $scorebis < 25) {
    alert("Trump la rattrape !")
}
if ($scorebis >= 33 && $scorebis <= 36) {
    alert("Trump va gagner !")
}
if ($scorebis >=50){
	$score = $scorebis + 2;
}
if ($score >= 53 && $score <= 60) {
    alert("Clinton repasse devant !");
}
if ($score >=94){
	$score = 0;
	$scorebis = $score -1;
	alert("Clinton est lâchée par son électorat !!");
	alert("Trump aussi !!");
}
}; 


$bouton.onclick = click;


// function clickbis(){

// $scorebis += $compteur;
// $affichage2.innerHTML = $scorebis +" élécteurs";
// $score = ($scorebis - 2);
// $affichage.innerHTML = $score +" élécteurs";
// if ($scorebis >= 10) {
//     	$scorebis = $score + 2;
// 	}
// if ($scorebis > $score && $scorebis >100){
// 	alert ("Trump va gagner les élections  !")
// 	}
// if ($scorebis == 10){
// 	$scorebis = $scorebis +20;
// }
// };

// $bouton2.onclick = clickbis;



// function incrementer (){
// $incre +=$score;
// $affichage2.innerHTML = $incre;
// }

// $multiplicateur.onclick = diminue;

// function stop (){
// if $score == 50
// 	alert ("Clinton a gagné les élections ! Ouf")
// else
// 	alert ("Trump a gagné les élections ! Good luck...")
// }

