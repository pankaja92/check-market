const express = require('express');
const routes = require('./routes');

const port = 5000 || process.env.PORT;

const app = express();

app.use('/', routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
