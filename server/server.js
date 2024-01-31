require("dotenv").config();
const express = require('express');
const cors = require('cors')
const app = express();

const connectDb = require('./utils/db')
const errorMiddleware = require('./middleware/error.middleware')

//Routes 
const authRouter = require('./Router/auth-router');
const applicationRouter = require('./Router/application-router');
const contactRouter = require('./Router/contact-router');
const adminRouter = require('./Router/admin-router')

// Middlewares
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,POST,DELETE,PUT,PATCH",
    credentials: true
}
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/application', applicationRouter);
app.use('/api/contact', contactRouter);
app.use('/api/admin', adminRouter);
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
