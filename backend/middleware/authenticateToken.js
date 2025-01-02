
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        console.log('No token provided.');
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log('Token is invalid:', err.message);
            return res.status(403).json({ message: 'Token is invalid' });
        }
        console.log('Token is valid:', user);
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;

