// MAGIC 8-BALL

// Array para armazenar as respostas da Magic Ball

const answersMagicBall = ["Pela angulação do taco, essa é caçapa!","Sem dúvida essa cai!",
"Hmm... Essa é caçapa!","Tenho minhas dúvidas","Essa a física não permite!","Sim!","Definitivamente!",
"Pode confiar, é caçapa!","Ih rapaz... Melhor deixa essa para lá...",
"Para não te comprometer, vou deixar essa em off...","Melhor nem tentar... Essa não cai!",
"Não vai cair nunca, passa um giz e tenta de novo!","Essa não precisa nem de giz, é certeza!", 
"A meu ver, essa entra!","Essa entra, certeza!","Quase cai! Passa um giz e tenta de novo!",
"Que tacada mais obscura, hein?! Sei não!","Que cara bom! Caçapa, filho!","Vai cair nunca!",
"Tá precisando de umas aulas hein... Que tacada foi essa filho..."]

// Função para gerar a resposta aleatória

const getRandomAnswer = () => {
    let answer = Math.floor(Math.random() * answersMagicBall.length)
    return answersMagicBall[answer]
}

// funçao para criar o popup

let magicSection = document.getElementsByClassName("magicBallSection")

// função para mostrar a resposta na tela

const input = document.getElementById("magicBallInput")
input.addEventListener("change", showAnswer)

const divContainer = document.createElement("div")
divContainer.classList.add('popupDiv');

function showAnswer() {
    let audio = document.querySelector("audio")
    audio.play()
    divContainer.innerHTML = ""
    let pickedAnswer = document.createElement("span")
    pickedAnswer.classList.add('popupSpan');
    pickedAnswer.innerText = getRandomAnswer()
    divContainer.appendChild(pickedAnswer)
    let section = document.getElementById("magicBallSec")
    section.appendChild(divContainer)
} 