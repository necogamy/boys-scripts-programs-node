

// You must install Axios before run this program
// And you must install node to run this script

/* Enter an api here */
const API = "Enter the api that you want to fetch inside the quotes";
/* Enter an api here */

/* And put your name here */
const userName = 'Nico';
/* And put your name here */

// Then just run this program with node and this command
// node --then--> .load fetcherBoy.js

// and see the magic


// ------------------------------------------------------------------










// promises
const callingAxios = () => {
  let axios = null;
  return new Promise((resolve, reject) => {
    axios = require('axios');

    console.log('Requesting Axios Library')

    setTimeout(() => {
      if (axios !== null) {
        resolve(axios);
      } else {
        console.log('Aborting program');
        reject('You must install Axios to use this program');
      }
    }, 5000);
  });
}

const beforeRequesting = (axios) => {
  return new Promise(resolve => {
    console.log(`Hey ${userName}, I will start to make a request to the desired API`);
    setTimeout(() => console.log('Press ^C if you want to abort'), 2000);

    const waitMessages = [
      'Ok, then making the request...',
      'Please wait',
      `Then, while we wait, I want to say you that my name is Fetcher Boy, nice to meet you ${userName}`,
      'Do you know that the name of my creator is Nico?'
    ]

    setTimeout(() => {
      let temp = 0;

      const intervalId = setInterval(() => {
        console.log(waitMessages[temp]);
        temp++;
        if (temp === 4) clearInterval(intervalId); // Using a human for loop, curious no? lol
      }, 2000)

    }, 5000)

    setTimeout(() => resolve(axios), 12000);
  });
}

const requestingData = async (axios) => {
  try {
    console.log('Requesting')
    const data = axios.get(API);
  }
  catch(e) {
    return 'An error while perfoming the request was ocurred';
  }
}


// promises calls
for (let i = 0; i <= 50; i++) console.log('.');

callingAxios()
  .then(axios => {
    console.log('Axios was successfully loaded');
    return beforeRequest(axios);
  })
  .catch(error => console.log(error));
