const express = require('express');
const routes = require('./routes');

const port = 5000 || process.env.PORT;

const app = express();

app.use('/', routes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get("*", (req,res) =>  {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
  }

app.listen(port, () => console.log(`Server is running on port ${port}`));
