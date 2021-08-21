

// You must install Axios before run this program
// And you must install node to run this script

/* Enter an api here */
const API = "Enter the api that you want to fetch inside the quotes";
/* Enter an api here */

/* And put your name here */
const userName = 'Nico';
/* And put your name here */

/* Change language */
const lang = 'EN'; // Only accepts EN or ES
/* Change language */

// Then just run this program with node and this command
// node --then--> .load fetcherBoy.js

// and see the magic


// ------------------------------------------------------------------






// fetcher boy program


// Before you enter to the program code, It isn't finished,
// I'm using code repeated while switching between languages
// But I will fix that soon




if (typeof API !== 'string' || API == []) throw new Error('You must enter a valid API');
const checkLang = lang === 'ES';



function spaces(howMuch) {
  for (let i = 1; i <= howMuch; i++) console.log('.');
}
let lines = '';
for (let i = 0; i <= 78; i++) lines += '-';

// promises
const callingAxios = () => {
  let axios = null;
  return new Promise((resolve, reject) => {
    axios = require('axios');

    checkLang ? console.log('Solicitando la biblioteca Axios')
    : console.log('Requesting Axios Library');

    setTimeout(() => {
      if (axios !== null) {
        resolve(axios);
      } else {
        if (checkLang) {
          console.log('Abortando programa');
          reject('Debes de instalar Axios para usar este programa');
        } else {
          console.log('Aborting program');
          reject('You must install Axios to use this program');
        }
      }
    }, 5000);
  });
}

const beforeRequesting = (axios) => {
  return new Promise((resolve, reject) => {
    spaces(8);

    if (checkLang) {
      console.log(`Hola ${userName}, voy a realizar una solicitud a la API que me proporcionaste`);
      setTimeout(() => console.log('Presiona ^C si quieres abortar esta operacion'), 2000);
    } else {
      console.log(`Hey ${userName}, I will start to make a request to the desired API`);
      setTimeout(() => console.log('Press ^C if you want to abort'), 2000);
    }

    const waitMessages = [
      'Ok, then making the request...',
      'Please wait',
      `Then, while we wait, I want to say you that my name is Fetcher Boy, nice to meet you ${userName}`,
      'Do you know that the name of my creator is Nico?'
    ]

    const spanishWait = [
      'Ok, entonces estoy realizando la solicitud...',
      'Por favor, espera',
      `Entonces, mientras esperamos me presento, soy Fetcher Boy, encantado de conocerte ${userName}`,
      '¿Sabes que el nombre de mi creador es Nico?'
    ]

    setTimeout(() => {
      let temp = 0;

      const intervalId = setInterval(() => {
        spaces(1);
        checkLang ? console.log(spanishWait[temp])
        : console.log(waitMessages[temp]);
        temp++;
        if (temp === 4) clearInterval(intervalId); // Using a human for loop, curious no? lol
      }, 4000)

    }, 8000)

    setTimeout(() => {
      if (3 + 3 === 6) {
        resolve(axios);
      } else {
        reject('Request took so long');
      }
    }, 15000);
  });
}


// promises calls
spaces(50);

callingAxios()
  .then(axios => {
    checkLang ? console.log('Axios fue exitosamente cargado')
    : console.log('Axios was successfully loaded');
    return beforeRequesting(axios);
  })
  .then(axios => {
    axios.get(API)
      .then(response => response.data)
      .then(finalResponse => {
        setTimeout(() => {
          spaces(10);
          checkLang ? console.log('Bueno, aca tengo tu respuesta')
          : console.log('Well, here is the response from the API');

          setTimeout(() => {
            spaces(5);
            console.log(lines);
            console.log(finalResponse);
            console.log(lines);
            spaces(5);
          }, 5000);

        }, 15000)
      })
      .catch(error => {
        setTimeout(() => {
          spaces(5);
          if (checkLang) {
            console.log('Ocurrio un error :(');
            console.log('Aca te dejo el mensaje del error');
          } else {
            console.log('An error occurred sorry :(');
            console.log('Here you can see the complete error message');
          }
          spaces(5);
          console.log(lines);
          throw error;
          console.log(lines);
          spaces(5);
        }, 20000);
      });
  })
  .catch(error => {
    setTimeout(() => {
      spaces(5);
      if (checkLang) {
        console.log('Ocurrio un error :(');
        console.log('Aca te dejo el mensaje del error');
      } else {
        console.log('An error occurred sorry :(');
        console.log('Here you can see the complete error message');
      }
      spaces(5);
      console.log(lines);
      throw error;
      console.log(lines);
      spaces(5);
    }, 20000);
  });
