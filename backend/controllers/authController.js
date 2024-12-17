const User = require('../models/User');

//User Registration 
const registerUser = async (req, res) => {
    const {name, email, password } = req.body;


    try {
        const userExists = await User.findOne({email});

        if (userExists) {
            return res.status(400).json({ message: 'User Already Exists' });
        }

        // Create a new user
        const user = await User.create({ name, email, password });
        
        // return success message
        res.status(201).json({ id: user._id, name: user.name, email: user.email });

    } catch (error) {
        console.error('Error in registerUser:', error.message);
        res.status(500).json({message: 'Server error', error: error.message });
    }
};


// User Login
const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {

        console.log('Login request received', { email, password });

        const user = await User.findOne({email});

        if(!user) { 
            console.log('User not found');
            return res.status(401).json({message: 'Invalid Credentials' });
        }


        // Compare passwords
        if (user.password !== password) {
            console.log('Password does not match');
            return res.status(401).json({message: 'Invalid Credentials '});
        }

        console.log('Login successful');
        res.json({id: user._id, name: user.name, email: user.email });

    } catch (error) {
        console.error('Error in loginUser:', error.message);
        res.status(500).json({message: 'Server error', error: error.message });    
    }
};

module.exports = {registerUser, loginUser};