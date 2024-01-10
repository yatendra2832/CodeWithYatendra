const { z } = require('zod')

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid Email Address" })
        .min(3, { message: "Email must contain atleast 3 character." })
        .max(255, { message: "Email must not be more than 255 character" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must contain atleast 7 character." })
        .max(1024, { message: "Password must not be more than 1024 character" })
})
const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must contain atleast 3 character." })
        .max(255, { message: "Name must not be more than 255 character" }),
    phone: z
        .string({ required_error: "phone is required" })
        .trim()
        .min(10, { message: "phone must contain atleast 10 character." })
        .max(12, { message: "phone must not be more than 12 character" })
})

module.exports = {signupSchema, loginSchema};