const axios = require('axios'); // You must install axios for this request
const { get } = axios;


const getIpApi = 'https://api.techniknews.net/ip/';
const getIpDataApi = 'https://api.techniknews.net/ipgeo/';



function spaces(howMuch) {
  for (let i = 1; i <= howMuch; i++) console.log('.');
}
function lines() {
  let lines = '';
  for (let i = 0; i <= 78; i++) lines += '-';
  console.log(lines);
}

spaces(50);
console.log('Requesting IP');

function getIp() {
  return new Promise((resolve, reject) => {
    const timer = 10000;
    let ip;

    try {
      get(getIpApi)
        .then(response => {
          setTimeout(() => {
            ip = response.data
            return resolve(ip)
          }, timer)
        })
        .catch(error => {
          setTimeout(() => reject(error), timer)
        });
    }
    catch(e) {
      setTimeout(() => reject(e), timer)
    }
  });
}

function getIpData(ip) {
  return new Promise((resolve, reject) => {
    const timer = 10000;


    try {
      get(getIpDataApi + ip)
        .then(response => {
          setTimeout(() => resolve(response.data), timer)
        })
        .catch(e => {
          setTimeout(() => reject(e), timer)
        })
    }
    catch(e) {
      setTimeout(() => reject(e), timer)
    }
  });
}

// Calls
getIp()
  .then(ipResponse => {
    spaces(3)
    lines()
    console.log('The ip of this network is')
    console.log(ipResponse)
    lines()
    return getIpData(ipResponse);
  })
  .then(ipInfo => {
    const info = {};

    function Data(data) {
      this.data = data;
    }

    for (let item in ipInfo) {
      info[item] = new Data(ipInfo[item]);
    }

    spaces(5);
    console.log('Data retrieved successfully')
    setTimeout(() => {
      console.log('Sending data...')
      spaces(5);
    }, 1000)
    setTimeout(() => console.table(info), 5000)
    spaces(2)
    setTimeout(() => console.info('Data successfully sent'), 7000)
    setTimeout(() => console.warn('Press Ctrl+C to leave'), 8500)
  })
  .catch(e => console.log(e));
