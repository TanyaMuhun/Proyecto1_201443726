const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { send } = require("process");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.send('prueba')
});



app.get("/jugar", (req, res) => {
    
	let turno = req.query['turno']
	let estado = req.query['estado']
	let contador= 0;


	if(turno===1) res.send("24")
	if(contador===0) res.send("53");
	
    if(turno == '1'){
        oponente = 0;
    }else{
        oponente = 1;
    }

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log("Server running at port %d", PORT);
});


var valoresMatriz = [
	[120, -20, 20, 5, 5, 20, -20, 120],
	[-20, -40, -5, -5, -5, -5, -40, -20],
	[20, -5, 15, 3, 3, 15, -5, 20],
	[5, -5, 3, 3, 3, 3, -5, 5],
	[5, -5, 3, 3, 3, 3, -5, 5],
	[20, -5, 15, 3, 3, 15, -5, 20],
	[-20, -40, -5, -5, -5, -5, -40, -20],
	[120, -20, 20, 5, 5, 20, -20, 120]
 ]

 function MovimientosPosibles(matriz, turno){

    var respuesta = new Array();

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if (movimientos(matriz, turno, i, j)) {
                var nuevaPosicion = { x: i, y: j };
                respuesta.push(nuevaPosicion);
            }
        }
    }

    return respuesta;
}

function getPopulations (game) {
	const result = {};

	result[tokens.white] = game.players[tokens.white].piecePopulation;
	result[tokens.black] = game.players[tokens.black].piecePopulation;

	return result;
}

function createInitialState (boardAsString, player) {
	boardAsString = boardAsString || Game.initialBoardAsString;

	const game = new Game(boardAsString);

	return {
		game: game,
		boardAsString: boardAsString,
		populations: getPopulations(game),
		player: player === 'O' ? player : 'X',
		isGameOver: false
	};
}
