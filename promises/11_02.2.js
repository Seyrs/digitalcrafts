const urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];

const prom1 = axios.get('https://dog.ceo/api/breed/beagle/images/random');
const prom2 = axios.get('https://dog.ceo/api/breed/chow/images/random');
const prom3 = axios.get('https://dog.ceo/api/breed/akita/images/random');
const prom4 = axios.get('https://dog.ceo/api/breed/dingo/images/random');
const prom5 = axios.get('https://dog.ceo/api/breed/eskimo/images/random');

  Promise.all([prom1,prom2,prom3,prom4,prom5])
    .then(function(responses) {
        console.log("all the data was fetched!");
        console.log(responses)
    })