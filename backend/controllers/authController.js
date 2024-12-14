const User = require('../models/User');

//User Registration 
const registerUser = async (req, res) => {
    const {name, email, password } = req.body;


    try {
        const userExists = User.findOne({email});

        if (userExists) return res.status(400).json({ message: 'User Already Exists' });

        const user = await User.create({ name, email, password });
        
        res.status(201).json({ id: user._id, name: user.name, email: user.email });

    } catch (error) {
        res.status(500).json({message: 'Server error', error });
    }
};

module.exports = registerUser;