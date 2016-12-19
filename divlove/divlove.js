
var $bird = document.getElementById("bird");
var $dog = document.getElementById("dog");
var $bee= document.getElementById("bee");
var $un= document.getElementById("un");
var $deux= document.getElementById("deux");
var $popup;

function myFunction() {
    $popup = setTimeout(alertFunc, 2000);
}

function alertFunc() {
    alert("Clique sur les bestioles pour les transformer en licornes !");
}

myFunction();

function birdreverse() {
	if ($bird.classList.contains("birdy"))
{
	$bird.classList.remove("birdy");
  $bird.classList.add("unicorn");
}

else if ($bird.classList.contains("unicorn"))
{
	$bird.classList.remove("unicorn");
	$bird.classList.add("birdy");
}
}

function dogreverse() {
	if ($dog.classList.contains("dog"))
{
	$dog.classList.remove("dog");
  $dog.classList.add("unicorn");
}

else if ($dog.classList.contains("unicorn"))
{
	$dog.classList.remove("unicorn");
	$dog.classList.add("dog");
}
}

function beereverse() {
	if ($bee.classList.contains("bee"))
{
	$bee.classList.remove("bee");
  $bee.classList.add("unicorn");
}

else if ($bee.classList.contains("unicorn"))
{
	$bee.classList.remove("unicorn");
	$bee.classList.add("bee");
}
}

function unreverse() {
	if ($un.classList.contains("un"))
{
	$un.classList.remove("un");
  $un.classList.add("unicorn");
}

else if ($un.classList.contains("unicorn"))
{
	$un.classList.remove("unicorn");
	$un.classList.add("un");
}
}

function deuxreverse() {
	if ($deux.classList.contains("deux"))
{
	$deux.classList.remove("deux");
  $deux.classList.add("unicornrainbow");
}

else if ($deux.classList.contains("unicornrainbow"))
{
	$deux.classList.remove("unicornrainbow");
	$deux.classList.add("deux");
}
}