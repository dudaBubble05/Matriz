console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
for (var y = 0; y < 3; y++) {
    minhaMatriz[y] = [];
    for (var x = 0; x < 3; x++) {
        var numero = parseInt(teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(y, ", ").concat(x, "] da matriz: ")));
        minhaMatriz[y][x] = numero;
    }
}
console.log(minhaMatriz);
