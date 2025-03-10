
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// User Registration
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User Already Exists' });
        }

        // Create a new user
        const user = await User.create({ name, email, password, 
           // isAdmin: isAdmin || false, //  Allow admin creation if needed // in admin functionlaity
        });

        // Return success message
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
           // isAdmin: user.isAdmin, // Include isAdmin in response // in admin functionality
            token: generateToken(user._id),
        });
    } catch (error) {
        console.error('Error in registerUser:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// User Login

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log('Login request received', { email, password });

        const user = await User.findOne({ email });

        if (!user || !(await user.matchPassword(password))) {
            console.log('Invalid credentials');
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        console.log('Login successful');
        res.json({
            userId: user._id, // Add explicit userId for frontend compatibility
            name: user.name,
            email: user.email,
         //   isAdmin: user.isAdmin, // Send isAdmin in response // in admin functionnality
            token: generateToken(user._id),
        });
    } catch (error) {
        console.error('Error in loginUser:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { registerUser, loginUser };

