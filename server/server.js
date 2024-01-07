const express = require('express');
const app = express();
const authRouter = require('./Router/auth-router');

app.use('/api/auth', authRouter);


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})