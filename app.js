const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This will be a new attempt to learn something and making a living // WITH MANUAL REVIEW'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
