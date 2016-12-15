
var $bird = document.getElementById("bird");



function birdreverse() {
	if ($bird.classList.contains("birdy"))
{
	$bird.classList.remove("birdy");
  $bird.classList.add("bird2");
}

else if ($bird.classList.contains("bird2"))
{
	$bird.classList.remove("bird2");
	$bird.classList.add("birdy");
}
}
