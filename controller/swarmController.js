const axios = require('axios');

const sleep = async function() {
  console.log('sleep for 2 second...');

  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(true);
    }, 1000)
  })
}

const swarmServer = async function(req, res) {
  let coinDataArray = []
  let reachLimit = false;

  while(!reachLimit) {
    try {
      await axios(`https://api.coindesk.com/v1/bpi/currentprice.json`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      }).then(async function(response){
        console.log('response: ', response);
        if (response.data && coinDataArray.length <= 500) {
          // console.log('response: ', response.data);
          console.log('coinDataArray length: ', coinDataArray.length);
          coinDataArray.push(response.data.bpi.USD);
        } else {
          reachLimit = true;
          console.log('reached coin desk data limit!');
          return res.send(coinDataArray);
        }
      }).catch(err => {
        console.log("There's been retrieving coin desk data: ", err)
        return res.send(false);
      });
    } catch(err) {
      res.json({error: `Error while making coindesk endpoint call ${err}`})
    }
  }

}

module.exports = {
  swarmServer
}