// VARIAVEIS
const closedCookie = document.querySelector("#closedCookie");
const button = document.querySelector("button");
const screem1 = document.querySelector(".screem1");
const screem2 = document.querySelector(".screem2 ");
const phrase = document.querySelector("#phases");
let numberRandom = Math.round(Math.random() * 9);
const randomPhrases = [
  "Não importa que você vá devagar, contanto que você não pare",
  "A inspiração existe, porém temos que encontrá-la trabalhando.",
  "Acredite em milagres, mas não dependa deles.",
  "Não é a carga que o derruba, mas a maneira como você a carrega.",
  "A vida não é sobre ter, é sobre dar e ser.",
  "Uma ideia é um feito de associação.",
  "Nós nos tornamos aquilo que pensamos.",
  "80% dos seus resultados vêm de 20% das suas ações.",
  "Um líder é um vendedor de esperança.",
  "Seja inteligente, mas nunca mostre demais.",
];

// EVENTOS
closedCookie.addEventListener("click", startGame);
button.addEventListener("click", playAgain);

function startGame() {
  screem1.classList.add("hide");
  screem2.classList.remove("hide");
  phrase.textContent = randomPhrases[numberRandom];
}
function playAgain() {
  numberRandom = Math.round(Math.random() * 9);
  screem1.classList.remove("hide");
  screem2.classList.add("hide");
}
