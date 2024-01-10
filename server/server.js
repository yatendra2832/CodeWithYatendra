require("dotenv").config();
const express = require('express');
const app = express();
const authRouter = require('./Router/auth-router');
const connectDb = require('./utils/db')
const errorMiddleware = require('./middleware/error.middleware')
app.use(express.json());
app.use('/api/auth', authRouter);
app.use(errorMiddleware);

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
