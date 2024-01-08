const express = require('express');
const app = express();
const authRouter = require('./Router/auth-router');
const connectDb = require('./utils/db')
app.use(express.json());//middleware for parsing the json payloads .Important for parsing the json request data
app.use('/api/auth', authRouter);


const PORT = 5000;
connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log('Error in connection with backend', err)
    })
