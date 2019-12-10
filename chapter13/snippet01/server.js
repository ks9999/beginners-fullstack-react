const express = require('express');
const svc = express();
const port = 4000;

svc.get('/', (req, res) => res.send('<h1>Welcome to the chapter on GraphQL!</h1>'));

svc.listen(port, () => console.log(`Example app listening on port ${port}!`))