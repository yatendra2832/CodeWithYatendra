const express = require('express');
const app = express();
const authRouter = require('./Router/auth-router');

app.use(express.json());//middleware for parsing the json payloads .Important for parsing the json request data
app.use('/api/auth', authRouter);


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})