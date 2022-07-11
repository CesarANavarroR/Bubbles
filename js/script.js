var canvas = document.getElementById("viewport");
var X, Y;

inicializarCanvas();

function inicializarCanvas() {
    var ctx = canvas.getContext("2d");
    X = canvas.width / 2;
    Y = canvas.height / 2;
    dibujar(ctx);
}

function dibujar(ctx) {
    ctx.fillStyle = "#108EFF";
    ctx.arc(X, Y, X, 0, 2 * Math.PI);
    ctx.fill();
}