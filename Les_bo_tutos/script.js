var i = 0;
var txt = 'Bienvenue sur les bO tutos, j\'espère que vous trouverez de quoi résoudre vos soucis grace à notre contenu qualitatif';
/* The text */
var speed = 50;

/* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}