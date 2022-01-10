//NIVELL 1 I 2

//SE CARGA LA FUNCION AL COMIENZO PARA QUE NO APAREZCA VACÍO//

window.onload = getRandomFunctions


//DECLARACIÓN DE ELEMENTOS//

let reportAcudits: Array<object> = []
const d = new Date();
class Joke {text: string; score: number; date: Date};
let joke: Joke;

//FUNCIÓN PARA OBTENER Y ESCRIBIR EN PANTALLA LA TEMPERATURA ACTUAL DE BARCELONA//


function getMeteo() {

  fetch('https://api.open-meteo.com/v1/forecast?latitude=41.3879&longitude=2.16992&current_weather=true', {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then((response: Response)=>{
    return response.json()
  }).then(
    data =>{
      document.getElementById('tempText').innerHTML = data.current_weather.temperature + 'º';
    }
  )
  .catch((error)=>{
    console.log(error);
  })
}

getMeteo()


//FUNCIÓN PARA OBTENER CHISTES DE ICANHAZDAD//

function getIJokePromise() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then((response: Response)=>{
    return response.json()
  }).then(
    data =>{
      document.getElementById('textJoke').innerHTML = data.joke;
      joke = new Joke();
      joke.text = data.joke;
    }
  )
  .catch((error)=>{
    console.log(error);
  })
}


//SCORE, A SU VEZ AL CLICKEAR HACE EL PUSH AL ARRAY DE ACUDITS//

document.getElementById('btn-score1').addEventListener('click', () => {
  joke.score = 1;
  joke.date = d;
  console.log(joke);
})

document.getElementById('btn-score2').addEventListener('click', () => {
  joke.score = 2;
  joke.date = d;
  console.log(joke);
})

document.getElementById('btn-score3').addEventListener('click', () => {
  joke.score = 3;
  joke.date = d;
  console.log(joke);
})



//FUNCIÓN PARA OBTENER CHISTES DE CHUK NORRIS//

function getCHNJokePromise() {
  fetch('https://api.chucknorris.io/jokes/random', {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then((response: Response)=>{
    return response.json()
  }).then(
    data =>{
      document.getElementById('textJoke').innerHTML = data.value
      joke = new Joke();
      joke.text = data.value;
    }
  )
  .catch((error)=>{
    console.log(error);
  })
}


//FUNCIÓN PARA OBTENER LA FUNCIÓN DEL CHISTE RANDOM//

function getRandomFunctions() {
  
  let val: number = Math.floor(Math.random() * 10)
  
  if (val >= 5)
    getCHNJokePromise()
  else 
    getIJokePromise()
}


document.getElementById('btn-seg-ac').addEventListener('click', () => {
  if (joke.score != undefined)
    reportAcudits.push(joke)
  getRandomFunctions()
  console.log(reportAcudits);
})