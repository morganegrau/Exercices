$carousel = document.getElementById("carousel");
$suivant = document.getElementById("suivant");
$precedant = document.getElementById("precedant");

function suivant() {
$carousel.scrollLeft += 405;
}

$suivant.onclick = suivant;


function precedant() {
$carousel.scrollLeft -= 405;
}

$precedant.onclick = precedant;

