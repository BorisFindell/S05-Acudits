//NIVELL 1 I 2
//SE CARGA LA FUNCION AL COMIENZO PARA QUE NO APAREZCA VACÍO//
window.onload = getRandomFunctions;
//DECLARACIÓN DE ELEMENTOS//
var reportAcudits = [];
var d = new Date();
var Joke = /** @class */ (function () {
    function Joke() {
    }
    return Joke;
}());
;
var joke;
//FUNCIÓN PARA OBTENER Y ESCRIBIR EN PANTALLA LA TEMPERATURA ACTUAL DE BARCELONA//
function getMeteo() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=41.3879&longitude=2.16992&current_weather=true', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById('tempText').innerHTML = data.current_weather.temperature + 'º';
    })["catch"](function (error) {
        console.log(error);
    });
}
getMeteo();
//FUNCIÓN PARA OBTENER CHISTES DE ICANHAZDAD//
function getIJokePromise() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById('textJoke').innerHTML = data.joke;
        joke = new Joke();
        joke.text = data.joke;
    })["catch"](function (error) {
        console.log(error);
    });
}
//SCORE, A SU VEZ AL CLICKEAR HACE EL PUSH AL ARRAY DE ACUDITS//
document.getElementById('btn-score1').addEventListener('click', function () {
    joke.score = 1;
    joke.date = d;
    console.log(joke);
});
document.getElementById('btn-score2').addEventListener('click', function () {
    joke.score = 2;
    joke.date = d;
    console.log(joke);
});
document.getElementById('btn-score3').addEventListener('click', function () {
    joke.score = 3;
    joke.date = d;
    console.log(joke);
});
//FUNCIÓN PARA OBTENER CHISTES DE CHUCK NORRIS//
function getCHNJokePromise() {
    fetch('https://api.chucknorris.io/jokes/random', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById('textJoke').innerHTML = data.value;
        joke = new Joke();
        joke.text = data.value;
    })["catch"](function (error) {
        console.log(error);
    });
}
//FUNCIÓN PARA OBTENER LA FUNCIÓN DEL CHISTE RANDOM//
function getRandomFunctions() {
    var val = Math.floor(Math.random() * 10);
    if (val >= 5)
        getCHNJokePromise();
    else
        getIJokePromise();
    if (val <= 3) {
        document.getElementById('fondo').classList.remove('imagen-2', 'imagen-3');
        document.getElementById('fondo').classList.add('imagen-1');
        //isar IMG 1
    }
    if (val > 3 && val <= 7) {
        document.getElementById('fondo').classList.remove('imagen-1', 'imagen-3');
        document.getElementById('fondo').classList.add('imagen-2');
        //usar IMG 2
    }
    if (val > 7) {
        //usar IMG 3
        document.getElementById('fondo').classList.remove('imagen-1', 'imagen-2');
        document.getElementById('fondo').classList.add('imagen-3');
    }
}
document.getElementById('btn-seg-ac').addEventListener('click', function () {
    if (joke.score != undefined)
        reportAcudits.push(joke);
    getRandomFunctions();
    console.log(reportAcudits);
});
