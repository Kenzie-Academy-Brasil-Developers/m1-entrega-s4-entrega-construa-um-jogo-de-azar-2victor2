
// CAÇA-PALAVRAS

//Lista de palavras possiveis de aparecer no caça palavras, todas relacionadas a sinuca ou bar
const wordSearch = ["sinuca","taco","gelada","giz", "caçapa","cerveja","petisco","garçom",
"coxinha","bolao","tacada","pares","impares","tabela","mesa","triangulo","estoura","zeca",
"pagodinho","guri"]

//função para mostrar as palavras na tela para o jogador

const containerP = document.getElementById("wordsToFind")
for(let P = 0; P < wordSearch.length; P++){
    let span = document.createElement("span")
    let hyphen = document.createElement("span")

    span.setAttribute("id","clickedWord")
    span.innerText = wordSearch[P]
    hyphen.innerText = " - "

    containerP.appendChild(span)
    containerP.appendChild(hyphen)

    span.addEventListener("click", ()=>{
        span.classList.toggle("line-through")
    })
}

//Array bidimensional onde serao adicionadas as palavras e letras aleatorias
let map = [
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ]

let map2 = [
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ]
//Função para criar um numero aleatorio entre dois valores
function randomNumber(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
//Funçao para criar letras aleatorias
let alphabet = "abcdefghijklmnopqrstuwvxyzç"
function randomLetter(){
    let index = randomNumber(0,27)
let letter = alphabet[index]
return letter
}
//funçao para checar se todos valores procurados sao conjuntos vazios (horizontalmente)
function avaliableSpot(x,y,word){
for (let indexY = 0; indexY < word.length;indexY++){
    if(map[x]===undefined){return false}
    let textoMapa = map[x][indexY+y]
if (textoMapa!==""){ return false}
}
return true
}
//funçao para checar se todos valores procurados sao conjuntos vazios (verticalmente)
function avaliableSpotVertical(x,y,word){
    for (let indexX = 0; indexX < word.length;indexX++){
        if (map[indexX+x]===undefined){return false}
        let textoMapa = map[indexX+x][y]
    if (textoMapa!==""){ return false}
    }
    return true
    }
//funçao para checar se todos valores procurados sao conjuntos vazios (diagonalmente)
function avaliableSpotDiagonal(x,y,word){
    for (let indexX = 0; indexX < word.length;indexX++){
    if (map[indexX+x]===undefined){return false}
        let textoMapa = map[indexX+x][indexX+y]
    if (textoMapa!==""){ return false}
    }
    return true
    }

//funçao para determinar randominicamente a posiçao da palavra


//funçao para escolher as palavras pro map

function chooseWords(num){
let a = randomNumber(0,wordSearch.length)
let b = randomNumber(0,wordSearch.length)
while (b === a){b=randomNumber(0,wordSearch.length)}
let c = randomNumber(0,wordSearch.length)
while (c===a||c===b){c=randomNumber(0,wordSearch.length)}

a = wordSearch[a]
b = wordSearch[b]
c = wordSearch[c]

let words = [a,b,c]
return words
}
// Funçao para começar as modificaçoes no Map com as palavras selecionadas
function start(){
//Declaraçao das variaveis pra funçao
let words = chooseWords()
let word
let posiçaoMapa
let orientaçao
let posiçaoMapaExtra
let disponibilidade = false
// Gerador de posiçao inicial aleatoria e checador de disponibilidade
    for (let count=0; count < 3; count ++){
    let inicialX=randomNumber(0,10)
    let inicialY=randomNumber(0,10)
    word = words[count]
    orientaçao = randomNumber(0,3)
    disponibilidade = false
    while (qualquerCoisa===false){
        switch (orientaçao) {
                case 0: 
                disponibilidade=avaliableSpot(inicialX,inicialY,word)
                    if(disponibilidade===false){
                    inicialX=randomNumber(0,10)
                    inicialY=randomNumber(0,10)
                    orientaçao = randomNumber(0,3)}
                    
                    break
                case 1:
                    disponibilidade = avaliableSpotVertical(inicialX,inicialY,word)
                    if (disponibilidade === false ){
                    inicialX=randomNumber(0,10)
                    inicialY=randomNumber(0,10)
                    orientaçao = randomNumber(0,3)}
                    
                    break
                case 2:
                    disponibilidade = avaliableSpotDiagonal(inicialX,inicialY,word)
                    if (disponibilidade === false ){
                    inicialX=randomNumber(0,10)
                    inicialY=randomNumber(0,10)
                    orientaçao = randomNumber(0,3)}
                   
                    break}
    }
//Preenchedor da tabela com as palavras escolhidas
if (orientaçao===0){
for (let index = 0; index<word.length;index++){
    posiçaoMapa = inicialY + index
map[inicialX][posiçaoMapa]=word[index]
map2[inicialX][posiçaoMapa]=word[index]
}
}
if (orientaçao===1){
    for (let index = 0; index<word.length;index++){
        posiçaoMapa = inicialX + index
    map[posiçaoMapa][inicialY]=word[index]
    map2[posiçaoMapa][inicialY]=word[index]
    }}
if (orientaçao===2){
for (let index = 0; index<word.length;index++){
    posiçaoMapa = inicialX + index
    posiçaoMapaExtra = inicialY + index
map[posiçaoMapa][posiçaoMapaExtra]=word[index]
map2[posiçaoMapa][posiçaoMapaExtra]=word[index]
}
}
}
return map
}

start()

//preencher com letras aleatorias o restante do array bidimensional
function start2(){
let mapFinal = map
for(let i = 0;i<mapFinal.length;i++){
    for(let j =0;j<mapFinal[i].length;j++){
if(mapFinal[i][j]==="")
mapFinal[i][j] = randomLetter()
}
}
return mapFinal
}

let map1=start2()

//Função para criar o array no HTML

const hunter = document.getElementById("container-table");
const handleBuildLine = (currentLine, line) => {
    for (let column = 0; column < currentLine.length; column++){
        const cell = document.createElement("div");
        cell.setAttribute("column", column);
        cell.setAttribute("line", line);
        cell.classList.add('letters');
        cell.textContent = map1[line][column];
        hunter.appendChild(cell);
    }
};

const handleBuildMap = () => {
    for(let line = 0; line < map.length; line++) {
        const currentLine = map[line];
        handleBuildLine(currentLine, line);
    }
};

handleBuildMap();

// funcionalidade do jogo


let selection = [
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",],
    ["","","","","","","","","","",]
    ]

hunter.addEventListener("click",clique2);
function clique2(e){
    let div = e.target
    let letra = div.textContent
    let linha = div.getAttribute("line")
    let coluna = div.getAttribute("column")
    div.classList.toggle("letters-clicked")
    if (selection[linha][coluna]===""){
    selection[linha][coluna] = letra
    }
        else{selection[linha][coluna] = ""}

        let theVictory = victory(selection, map2);
        if (theVictory == true) {
            hunter.removeEventListener("click",clique2)
            if (confirm("Parabéns, você achou todas as palavras! Deseja jogar novamente?")) {
                alert("Vamos lá");
                restartGame();
                } else {
                alert("Que pena!");
                }
        }
        

}

//parametro de vitoria
const victory = (a, b) => {
    console.log(a) 
    console.log(b)
    if (a.length == b.length){
        for(let line = 0; line < a.length; line++){
            for (let column = 0; column < a.length; column++){
                if (a[line][column]!==b[line][column]){
                    return false; 
                } 
            }
        } return true;
    }
}
let theVictory = victory(selection, map2);
if (theVictory == true) {
    hunter.removeEventListener("click",clique2)
    alert("PEI")
    // if (confirm("Parabéns, você achou todas as palavras! Deseja jogar novamente?")) {
    //     alert("Vamos lá");
    //     restartGame();
    //     } else {
    //     alert("Que pena!");
    //     }
}


//FUNÇÃO RESET
const reset = document.getElementById('reset');

reset.addEventListener('click', restartGame);

function restartGame() {
    hunter.innerHTML = ""
    
    map = [
        ["","","","","","","","","","",],
        ["","","","","","","","","","",],
        ["","","","","","","","","","",],
        ["","","","","","","","","","",],
        ["","","","","","","","","","",],
        ["","","","","","","","","","",],
        ["","","","","","","","","","",],
        ["","","","","","","","","","",],
        ["","","","","","","","","","",],
        ["","","","","","","","","","",]
        ]
    selection = [
            ["","","","","","","","","","",],
            ["","","","","","","","","","",],
            ["","","","","","","","","","",],
            ["","","","","","","","","","",],
            ["","","","","","","","","","",],
            ["","","","","","","","","","",],
            ["","","","","","","","","","",],
            ["","","","","","","","","","",],
            ["","","","","","","","","","",],
            ["","","","","","","","","","",]
            ]
    map2 = [
                ["","","","","","","","","","",],
                ["","","","","","","","","","",],
                ["","","","","","","","","","",],
                ["","","","","","","","","","",],
                ["","","","","","","","","","",],
                ["","","","","","","","","","",],
                ["","","","","","","","","","",],
                ["","","","","","","","","","",],
                ["","","","","","","","","","",],
                ["","","","","","","","","","",]
                ]
    hunter.addEventListener("click",clique2)
    start()
    map1=start2()
        handleBuildMap()

}