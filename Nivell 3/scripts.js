//PARA RECORDAR//
//FORMA CON ASYNC + AWAIT//
// async function getJoke() {
//   try {
//     const jokeData = await fetch('https://icanhazdadjoke.com/', {
//       headers: {
//         'Accept': 'application/json'
//       }
//     });
//     const jokeObj = await jokeData.json()
//     console.log(jokeObj.joke);
//   } catch (error){
//     console.log(error);
//   }
// }
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//NIVELL 1 I 2
//SE CARGA LA FUNCION AL COMIENZO PARA QUE NO APAREZCA VACÍO//
window.onload = getRandomFunctions;
//HACER JQUERI EN 800 Y MÒBIL CON LA PEQUITA
//HACER UN RANDOM MATH PARA QUE CAMBIE DE FONDOS
//DECLARACIÓN DE ELEMENTOS//
var reportAcudits = [];
var d = new Date();
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
    })["catch"](function (error) {
        console.log(error);
    });
}
//SCORE, A SU VEZ AL CLICKEAR HACE EL PUSH AL ARRAY DE ACUDITS//
document.getElementById('btn-score1').addEventListener('click', function () {
    reportAcudits.push({ joke: document.getElementById('textJoke').textContent, score: 1, date: d });
    console.log(reportAcudits);
});
document.getElementById('btn-score2').addEventListener('click', function () {
    reportAcudits.push({ joke: document.getElementById('textJoke').textContent, score: 2, date: d });
    console.log(reportAcudits);
});
document.getElementById('btn-score3').addEventListener('click', function () {
    reportAcudits.push({ joke: document.getElementById('textJoke').textContent, score: 3, date: d });
    console.log(reportAcudits);
});
//FUNCIÓN PARA OBTENER CHISTES DE CHUK NORRIS//
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
    })["catch"](function (error) {
        console.log(error);
    });
}
//FUNCIÓN PARA OBTENER LA FUNCIÓN DEL CHISTE RANDOM//
function getRandomFunctions() {
    var val = Math.floor(Math.random() * 10);
    console.log(val);
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
    getRandomFunctions();
});
var counter = 1;
//FUNCIÓN PARA OBTENER FUNCIONES ALTERNADAS//
// function getAltFunctions() {
//   if (counter == 1){
//     getCHNJokePromise()
//     counter +=1
//   }
//   else if (counter == 2){
//     getIJokePromise()
//     counter +=1
//   }
//   else if (counter == 3){
//     console.log('aquí iría un tercero')
//   counter = 1
//   }
// }
