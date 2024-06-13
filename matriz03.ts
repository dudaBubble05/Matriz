/*
3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas.
Nome: Maria Eduarda Freitas
*/

console.clear();

let teclado1 = require (`prompt-sync`)();
let minhaMatriz: number[][] = []; 

for (let l = 0; l < 3; l++) {
    minhaMatriz[l] = []

    for (let c = 0; c < 2; c++) {
        let numero: number = parseInt(teclado1(`Digite o número que vai estar no endereço [${l}, ${c}] da matriz: `));

        minhaMatriz[l][c] = numero;
    }
}

console.log(minhaMatriz);
