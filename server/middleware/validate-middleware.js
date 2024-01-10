const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const err_message = err.errors[0].message;
        res.status(500).send(err_message)
    }
}

module.exports = validate;
/* Code Explaination
This code exports a middleware function named validate. This middleware is designed to validate the request body against a provided schema using an asynchronous validation function (parseAsync). Let's break down the code:

Function Signature:

javascript
Copy code
const validate = (schema) => async (req, res, next) => {
    // ... middleware logic ...
}
The validate function takes a schema as a parameter and returns an asynchronous middleware function that will be used in Express.js.

Middleware Logic:

javascript
Copy code
try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
} catch (err) {
    const err_message = err.errors[0].message;
    res.status(500).send(err_message);
}
Inside the middleware function, there is a try-catch block.
It attempts to parse and validate the req.body using the parseAsync function provided by the schema. This is assumed to be an asynchronous function that returns a promise.
If the validation is successful, the parsed body is stored in req.body, and the next() function is called to proceed to the next middleware or route handler.
If there is an error during validation, it catches the error in the catch block.
It extracts the error message from the first error in the err.errors array.
It sends a 500 Internal Server Error response to the client with the extracted error message.
Export:

javascript
Copy code
module.exports = validate;
The validate middleware function is exported, allowing it to be used in other parts of the application. It's common to use such middleware to enforce validation rules on incoming request data before further processing.

To use this middleware, you would typically import it into your Express application and apply it to the route or routes where you want to enforce the specified validation schema. For example:

javascript
Copy code
const express = require('express');
const validate = require('./path-to-validate-middleware');

const app = express();

const someSchema = ;

app.post('/some-route', validate(someSchema), (req, res) => {
    // If validation passes, this route handler will be executed.
    res.send('Validation passed!');
});

// ... other routes and configurations ...
This example demonstrates how to apply the validate middleware to a specific route ('/some-route'). The middleware will be responsible for validating the request body against the provided schema before allowing the route handler to execute.
*/





