/*
var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];
  
  axios.get(urls[0]) {
    console.log("data was fetched!");
  })
      .then(axios.get(urls[1]) {
          console.log("data was fetched!")
      })
        .then(axios.get(urls[2]) {
            console.log("data was fetched!")
        })
            .then(axios.get(urls[3]){
                console.log("data was fetched!")
            })
                .then(axios.get(urls[4]) {
                    console.log("data was fetched!")
                });
did not work, above*/
//below works

axios.get('https://dog.ceo/api/breed/beagle/images/random')
  .then(response => {
      console.log('data was fetched!');
      return axios.get('https://dog.ceo/api/breed/chow/images/random')
  })
  .then(response => {
      console.log('data was fetched!');
      return axios.get('https://dog.ceo/api/breed/akita/images/random')
  })
  .then(response => {
      console.log('data was fetched!');
      return axios.get('https://dog.ceo/api/breed/dingo/images/random')
  })
  .then(response => {
      console.log('data was fetched!');
      return axios.get('https://dog.ceo/api/breed/eskimo/images/random')
  })
  .then(response => {
      console.log('data was fetched!');
  })
  .catch(error => {});
