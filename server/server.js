const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("<H1>Hello World,We setup the basic server of the website</H1>");
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})