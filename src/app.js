// const request = require('request');

// const standings = (scores, callback) => {
//     const url = 'https://api.sportsdata.io/v3/mlb/' + scores + '/json/Standings/2020?key=7a075b5db06743dea37a48b93bfe9575';
//     request({
//         url,
//         json: true
//     }, (error, {
//         body
//     }) => {
//         if (error) {
//             callback('something is wrong', undefined)
//         } else if (body.features.length === 0) {
//             callback('Cant find the info', undefined)
//         } else {
//             callback(undefined, {
//                 name0: response.body[2].Name,
//                 wins0: response.body[2].Wins,
//                 losses0: response.body[2].Losses
//             })
//         }
//     })
// }

// // console.log(standings);
// module.exports = standings


// console.log("==================================");
// console.log("Chicago " + response.body[2].Name);
// console.log("Wins:" + response.body[2].Wins);
// console.log("Losses:" + response.body[2].Losses);
// console.log("==================================");
// console.log("Chicago " + response.body[17].Name);
// console.log("Wins:" + response.body[17].Wins);
// console.log("Losses:" + response.body[17].Losses);
// console.log("==================================");


const axios = require('axios');



const config = {
  method: 'get',
  url: 'https://api.sportsdata.io/v3/mlb/scores/json/Standings/2020',
  headers: { 
    'Ocp-Apim-Subscription-Key': ''
  }
};

axios(config)
.then(function (response) {
//   console.log(JSON.stringify(response.data[0]));
    console.log("==================================");
    console.log("Chicago " + response.data[1].Name);
    console.log("Wins:" + response.data[2].Wins);
    console.log("Losses:" + response.data[2].Losses);
    console.log("==================================");
    console.log("Chicago " + response.data[15].Name);
    console.log("Wins:" + response.data[0].Wins);
    console.log("Losses:" + response.data[0].Losses);
    console.log("==================================");
})
.catch(function (error) {
  console.log(error);
});