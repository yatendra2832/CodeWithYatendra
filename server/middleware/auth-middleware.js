const authMiddleware = async (req, res, next) => {
    // Extract the JWT from the Authorization header
    const token = req.header('Authorization');

    // If no token is provided, respond with a 401 Unauthorized status
    if (!token) {
        return res.status(401).json({ message: "Unauthorized, Token not provided" });
    }

    // Remove 'Bearer' from the token string and trim any extra spaces
    const jwtToken = token.replace('Bearer', "").trim();

    try {
        // Verify the JWT using the secret key
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        // Retrieve user data from the database based on the email in the JWT
        const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });

        // Attach user data, token, and userID to the request object
        req.user = userData;
        req.token = jwtToken; // This line seems to have a typo, should be req.token = jwtToken instead of req.token = Token
        req.userID = userData._id;

        // Call the next middleware in the chain
        next();
    } catch (error) {
        // Handle any errors during JWT verification
        // For example, an expired or invalid token
        // You might want to send a 401 Unauthorized response in such cases
        res.status(401).json({ message: "Unauthorized, Invalid Token" });
    }
};
