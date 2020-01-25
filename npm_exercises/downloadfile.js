const download = require('download-file');
const wallpaper = require('wallpaper');
const axios = require('axios');

//dog url fetch
const url ="https://dog.ceo/api/breeds/image/random";
axios.get("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
        console.log(response);
    })
//download-file parameters
const options = {
    directory: "./wallpapers/",
    filename: "dog.jpg"
}

download(url,options, function(err) {
    if (err) throw err
    wallpaper.set('./wallpapers/dog.jpg')
})