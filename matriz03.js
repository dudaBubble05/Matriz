/*
3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas.
Nome: Maria Eduarda Freitas
*/
console.clear();
var teclado1 = require("prompt-sync")();
var minhaMatriz = [];
for (var l = 0; l < 3; l++) {
    minhaMatriz[l] = [];
    for (var c = 0; c < 2; c++) {
        var numero = parseInt(teclado1("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(l, ", ").concat(c, "] da matriz: ")));
        minhaMatriz[l][c] = numero;
    }
}
console.log(minhaMatriz);
