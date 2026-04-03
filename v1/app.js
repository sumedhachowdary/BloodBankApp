const express = require('express');
const app = express();

app.use(express.json());

let donors = [];

app.post('/add', (req, res) => {
    donors.push(req.body);
    res.send("Donor added successfully");
});

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log("Server running on port 3000"));