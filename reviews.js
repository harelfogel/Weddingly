const axios = require('axios');
const consts = require('./constants' );
const { API_KEY } = consts;
require('dotenv').config();


const configsArray = [
  {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJd7tW5r5MHRURyIkIVuda6cY&key=${API_KEY}`,
    headers: {}
  },
  {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJceOJKZ23AhURqeWGraI_WS8&key=${API_KEY}`,
    headers: {}
  },
  {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJZZIfOi83HRURj7zX6Fd3crs&key=${API_KEY}`,
    headers: {}
  }
];


let indexRating = async (array) => {
  for (i in configsArray) {
    await axios(configsArray[i])
      .then(function (response) {
        console.log(response.data);
        const ratingIndex = (response.data.result["rating"]);
        array.push(ratingIndex);
        return array;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

let sortArr = async ()=>{
  let arr=[];
   await indexRating(arr);
   console.log(arr.sort());
}

sortArr();




