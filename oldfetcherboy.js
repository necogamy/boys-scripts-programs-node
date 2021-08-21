try {
  console.log('Requesting Axios');
  axios = require('axios'); // You must install axios for this request
} catch(e) {
  for (let i = 0; i < 50; i++) console.log('.');
  throw new Error('You must install Axios for this program');
}



// Fetcher Program
let lines = '';
for (let i = 0; i <= 78; i++) lines += '-';

setTimeout(() => {
  for (let i = 0; i < 50; i++) console.log('.');
}, 3000)

for (let i = 0; i < 30; i++) console.log(' ');

setTimeout(() => {
  console.log('Hello, I will start to make a request to the desired API');
}, 5000)
setTimeout(() => {
  console.log('Press ^C if you want to abort');
}, 6000)
setTimeout(() => {
  for (let i = 0; i < 10; i++) console.log('.');
  console.log('Ok, then making request...');
  console.log('Please wait');
}, 12000)

setTimeout(() => {
  for (let i = 0; i < 10; i++) console.log('.');

  if (typeof API !== 'string' || API == []) throw new Error('You must enter a valid API');

  axios.get(API)
    .then(response => {
      let endResult = null;
      try {
        endResult = response.data;
      } catch(e) {
        throw e;
      }
      if (endResult !== null) {
        console.log('Request done, here is the response');
        for (let i = 0; i < 4; i++) console.log('.');
        console.log('');
        setTimeout(() => {
          console.log(endResult);
          console.log('');
        }, 5000)
      }
    })
    .then(ok => {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) console.log('.');
        console.log('Request done');
        console.log('Press ^C to leave');
      }, 10000)
    })
    .catch(notOk => {
      for (let i = 0; i < 10; i++) console.log('.');
      console.log('ALERT');
      console.log('An error was received here the error message:')
      setTimeout(() => {
        console.log('');
        console.log(lines);
        console.log(notOk);
        console.log(lines);
        console.log('');
      }, 3000)
      setTimeout(() => {
        for (let i = 0; i < 10; i++) console.log('.');
        console.log('Throwing program. Press ^C to leave');
      }, 6000)
    });

}, 20000);
