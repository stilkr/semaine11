/* début Simplon */

$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "Pas assez !";
    }
    if ($proposition.value == reponse) {
        $resultat.innerHTML = "Vous avez trouvé ! Bravo !";
		$resultat.style.color = "#e74c3c";
		$resultat.style.fontFamily = "Yellowtail";
		$resultat.style.fontSize = "x-large";
		
    }
    if ($proposition.value > reponse) {
        $resultat.innerHTML = "Trop !";
    }
}

$bouton.onclick = verifier;

/* fin Simplon */


/* pour la vidéo */

var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");

function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {    
    vid.pause();	
	vidFade();
});

pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
	if (vid.paused) {
vid.play();
		pauseButton.innerHTML = "Pauser";
	} else {
        vid.pause();
        pauseButton.innerHTML = "Reprendre";
	}
})