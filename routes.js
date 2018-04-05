const paths= require('./controllers/main');
const fetch = require('node-fetch');

// const getAll = "'"+paths.totalMarketDetails+"'";
module.exports = app => {
  app.get('/api/getcurrencylist', (req, res) => {
    fetch(paths.totalMarketDetails)
      .then(res => res.json())
      .then(data => {
        res.send(data);
        // console.log(data);
      })
      .catch(err => console.log(err))
  })
  
  app.get('/api/:currency', (req,res) => {
    fetch(paths.totalMarketDetails+'/'+req.params.currency)
      .then(res => res.json())
      .then(data => res.send(data))
      .catch(err => console.log(err))
  })
};
