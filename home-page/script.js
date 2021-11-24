
// CAÇA-PALAVRAS

//Lista de palavras possiveis de aparecer no caça palavras, todas relacionadas a sinuca ou bar
const wordSearch = ["sinuca","taco","gelada","giz", "caçapa","cerveja","petisco","garçom",
"coxinha","bolao","tacada","pares","impares","tabela","mesa","triangulo","estoura","zeca",
"pagodinho"]
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
    ["","","","","","","","","","",]
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
    ["","","","","","","","","","",]
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
    let temp = map[x][indexY+y]
if (temp!==""){ return false}
}
return true
}

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
const words = chooseWords()
let temp
let temp2
for (let count=0; count < 3; count ++){
let inicialX=randomNumber(0,10)
let inicialY=randomNumber(0,10)
temp = words[count]
while (avaliableSpot(inicialX,inicialY,temp)===false){
    inicialX=randomNumber(0,10)
    inicialY=randomNumber(0,10)}
for (let index = 0; index<temp.length;index++){
temp2 = inicialY + index
map[inicialX][temp2]=temp[index]
map2[inicialX][temp2]=temp[index]
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

console.table(map2)
let map1=start2()
console.table(map2)

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

hunter.addEventListener("click",clique2)
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
        
}




//parametro de vitoria



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
    
    start()
    map1=start2()
        handleBuildMap()

}