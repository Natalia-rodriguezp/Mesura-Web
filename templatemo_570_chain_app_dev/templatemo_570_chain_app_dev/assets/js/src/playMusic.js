import { showMessage } from "./showMessage.js"; // show message

const musicTitles = [
    "Pharrell Williams  Happy",
    "MACKLEMORE  RYAN LEWIS  CANT HOLD US FEAT RAY DALTON",
    "DNCE  Cake By The Ocean",
    "LMFAO ft Lauren Bennett GoonRock  Party Rock Anthem",
    "Twenty one pilots Stressed Out",
    "Fun We Are Young ft Janelle Monáe",
    "Clean Bandit  Rather Be ft Jess Glynne",
    "MACKLEMORE  RYAN LEWIS  THRIFT SHOP FEAT WANZ",
    "Foster The People - Pumped Up Kicks",
    "Robin Schulz  Sugar feat Francesco Yates",
    "Avicii  Waiting For Love",
    "OneRepublic  Counting Stars",
    "Bastille Pompeii",
    "Mark Ronson  Uptown Funk",
    "Calvin Harris  Blame ft John Newman",
    "Imagine Dragons  Radioactive",
    "Calvin Harris  Feel So Close",
    "MAGIC  Rude",
    "Of Monsters And Men  Little Talks",
    "Vance Joy  Riptide",
    "Daft Punk  Instant Crush ft Julian Casablancas",
    "Milky Chance  Flashed Junk Mind",
    "Gotye  Somebody That I Used To Know feat Kimbra",
    "MGMT  Kids",
    "Maroon 5 Sugar",
    "Dua Lipa  Levitating Featuring DaBaby",
    "OMI  Cheerleader Felix Jaehn Remix",
    "The Lumineers  Ho Hey",
    "Procura",
    "Bacilos  Caraluna",
    "Sie7e  Tengo tu love",
    "Little Jesus  La Magia",
    "Little Jesus  TQM Ft Ximena Sariñana  Elsa y Elmar",
    "Caloncho  Palmar ft Mon Laferte",
    "Caloncho  Brillo Mio "
];

const cites = [
    "Tus emociones no deben ser paralizadoras. No deberían defenderse. No deberían impedirte ser todo lo que puedes ser",
    "Después de cada tormenta sonríe el sol; para cada problema hay una solución y el deber irrenunciable del alma es estar de buen ánimo",
    "Una actitud positiva te da poder sobre tus circunstancias en lugar de que tus circunstancias tengan poder sobre ti",
    "Solo existen dos días en los que no se puede hacer nada, uno se llama ayer y el otro mañana. Así que hoy es el día de amar, crecer, superarte, ser feliz, pero por sobre todas las cosas vivir",
    "Si no puedes volar, corre, si no puedes correr, camina, si no puedes caminar, gatea, pero hagas lo que hagas, sigue adelante",
    "Valiente no es aquel que enfrenta un problema, valiente es aquel que no se deja vencer por ninguno",
    "Da tu primer paso ahora. No es necesario que veas el camino completo, pero da tu primer paso. El resto irá apareciendo a medida que camines",
    "Tus circunstancias presentes no determinan a dónde vas; simplemente determinan dónde comienzas",
    "La preocupación no elimina el dolor del mañana, sino que elimina la fuerza del hoy",
    "La mejor arma contra el estrés es la habilidad para elegir un pensamiento sobre el otro",
    "Casi todas las cosas volverán a funcionar si las desenchufas por unos minutos... incluso tú",
    "No te preocupes por adelantado por algo que quizá nunca suceda. Disfruta del sol",
    "No es el estrés lo que nos mata, sino cómo reaccionamos ante él",
    "Espera que suceda algo bueno hoy sin importar qué ocurrió ayer. No estás atrapado en el pasado. El pasado solo puede lastimarte si te aferras a él"
]


console.log(musicTitles[Math.floor(Math.random() * musicTitles.length)])

const likebutton=document.getElementById('like');
const unlikebutton=document.getElementById('unlike');
const titleText=document.getElementById('titleMusic');

likebutton.addEventListener("click", myFunctiona);
unlikebutton.addEventListener("click", myFunction);

function myFunctiona() {
    showMessage("Se ha guardado tus gustos", "linear-gradient(to right, #00b09b, #96c93d)");
}

function myFunction() {

    const song = musicTitles[Math.floor(Math.random() * musicTitles.length)]

    document.getElementById('titleMusic').textContent  = song


    document.getElementById('f1').textContent  = cites[Math.floor(Math.random() * cites.length)]
    document.getElementById('f2').textContent  = cites[Math.floor(Math.random() * cites.length)]
    document.getElementById('f3').textContent  = cites[Math.floor(Math.random() * cites.length)]
    document.getElementById('f4').textContent  = cites[Math.floor(Math.random() * cites.length)]

    document.getElementById("imageMusic").src="assets/images/"+song+".jpg";
    document.getElementById("sourMusic").src="assets/images/"+song+".mp3";

    console.log("Funciona bto");
}