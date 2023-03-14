const counterDisplay = document.querySelector("h3");
let counter = 0;

//FAIRE UNE FONCTION
const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  //METTRE LA TAILLE ALEATOIRE QUI PREND LA MEME VALEUR
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  //METTRE LES BULLES EN MODE STYLE ALEATOIRE
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  //SETPROPERTY ME PERMET DE PRENDRE LA VARIABLE DIRECTEMENT DANS LE CSS + FAIRE UNE CONDITION
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  //FAIRE UN EVENEMENT AU CLICK
  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  //SETTIMEOUT ME PERMET DE ME SUPRIMET LES BULLES
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

//LE SET INTERVAL DE JOUER LA FONCTION BUBBLEMARKER A L INFINIT
setInterval(bubbleMaker, 1000);
