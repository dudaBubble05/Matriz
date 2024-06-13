/*
5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.
Nome: Maria Eduarda Freitas
*/
console.clear();

let teclado = require (`prompt-sync`)();
let minhaMatriz: number[][] = []; 

for (let y = 0; y < 3; y++) {
    minhaMatriz[y] = []

    for (let x = 0; x < 3; x++) {
        let numero: number = parseInt(teclado(`Digite o número que vai estar no endereço [${y}, ${x}] da matriz: `));

        minhaMatriz[y][x] = numero;
    }
}

console.log(minhaMatriz);