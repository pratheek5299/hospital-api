const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

module.exports.signUp = async function(req, res){
    try {
        if(req.body.password != req.body.confirmPassword){
            return res.status(400).json({
                message: 'Password is not matching'
            })
        }else{
            let user = await User.create(req.body);
            return res.status(200).json({
                message: 'The user has been successfully registered'
            })
        }
    }catch(err){
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

module.exports.createSession = async function(req, res){
    try{
        let user = await User.findOne({name: req.body.name});
        if(!user || user.password != req.body.password){
            return res.status(422).json({
                message: 'Invalid Username or Password'
            })
        }else{
            return res.status(200).json({
                message: 'Sign in successful, here is the token.',
                data: {
                    token: jwt.sign(user.toJSON(), 'hospital-api', {expiresIn: 100000})
                }
            })
        }
    }catch(err){
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}
