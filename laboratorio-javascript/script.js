let arrayTest = [2, 6, 26, 82, 4, 0, 78, 90]

// 1) Escreva uma função JavaScript para verificar se uma `entrada` é um array ou não.
function isArrayNew(element) {
    Array.isArray(element) ? console.log("É array") : console.log("Não é um array");
}
console.log("Questão 1:")
isArrayNew(arrayTest);
isArrayNew("teste");

// 2) Escreva uma função JavaScript para clonar um array.
function arrayCopy(array) {
    let newArray = array.slice();
    console.log(newArray)
}
console.log("Questão 2:")
arrayCopy(arrayTest)

// 3) Escreva uma função JavaScript para obter o primeiro elemento de um array. Passar um parâmetro 'n' retornará os primeiros 'n' elementos do array.
function firstNumbers(n, array) {
    let newArray = array.slice(0, n)
    console.log(newArray)
}
console.log("Questão 3:")
firstNumbers(5, arrayTest)

// 4) Escreva uma função JavaScript para obter o último elemento de um array. Passar um parâmetro 'n' retornará os últimos 'n' elementos do array.
function lastNumbers(n, array) {
    let newArray = array.slice(-n)
    console.log(newArray)
}
console.log("Questão 4:")
lastNumbers(5, arrayTest)

// 5) Escreva um programa JavaScript simples para unir todos os elementos de um array em uma string.
function arrayToString(array) {
    console.log(array.toString())
}
console.log("Questão 5:")
arrayToString(arrayTest)

// 6) Escreva um programa JavaScript que aceite um número como entrada e insira traços (-) entre cada dois números pares. Por exemplo, se você aceitar 025468, a saída deve ser 0-254-6-
let number = 25468;
function dashEvenNumber(number) {
    let numberToArray = number.toString().split('')
    for(i = 0; i < numberToArray.length; i++) {
        if (numberToArray[i]%2 == 0 && numberToArray[i+1]%2 == 0) {
            numberToArray.splice((i+1), 0, "-")
        }
    }
    console.log(numberToArray.join(''))
}
console.log("Questão 6:")
dashEvenNumber(number)

// 7) Escreva um programa JavaScript para localizar o item mais frequente de um array.

// 8) Escreva um programa JavaScript para remover itens duplicados de um array (ignore a diferenciação entre maiúsculas e minúsculas).

// 9) Existem dois arrays com valores individuais, escreva um programa JavaScript para calcular a soma de cada valor de índice individual dos arrays fornecidos.
function sumArrays(array1, array2) {
    let newArray = [];
    for(i=0; i<array1.length; i++) {
        for(j=0; j<array2.length; j++) {
            if (i==j) {
                newArray.push(array1[i] + array2[j])
            }
        }
    }
    console.log(newArray)
}
sumArrays([7,2], [1,5])

// 10) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los no console.
let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

function pilha(vetorPilha, vetorAdiciona) {
    vetorAdiciona.forEach(element => {
        vetorPilha.push(element)
        console.log(element)
    });

    console.log("Vetor pilha: "+ vetorPilha)
}

pilha(vetorPilha, vetorAdiciona)