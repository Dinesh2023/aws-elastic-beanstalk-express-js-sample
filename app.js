const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('This is newly created test environment for venkat, once again added'));
=======
app.get('/', (req, res) => res.send('This is newly created test environment for venkat'));
>>>>>>> 77abdcbc066a8d9409aacbe08676b22b03ac715c

app.listen(port);
console.log(`App running on http://localhost:${port}`);
