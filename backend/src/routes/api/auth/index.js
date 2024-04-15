const express = require('express')
const jwt = require('jsonwebtoken');
const parseBearerToken = require('parse-bearer-token').default;
const Admins = require('../../../models/admins');
const {JWT_SECRET} = process.env;


const router = express.Router();


/**
 *
 */
router.post('/login', async (request, response) => {

    const {username, password} = request.body;

    const admin = await Admins.findOne({username});

    if(admin?.checkPassword(password)) {

        const token = jwt.sign({username}, JWT_SECRET, {expiresIn: '1h'})

        return response.status(200).json({ token });

    } else {

        response.status(401).json({message: 'invalid username or password'});
    }

});



/**
 *
 */
router.get('/authorized', async (request, response) => {

    const token = parseBearerToken(request);

    try {

        const decoded = jwt.verify(token, JWT_SECRET);

        return response.status(200).json({decoded});

    } catch(ex) {

        return response.status(401).json({message: ex.message})
    }

});



/**
 *
 */
router.get('/logout', async (request, response) => {


});



/**
 *
 */
router.post('/register', async (request, response) => {

    const {username, password} = request.body;

    if(!username || !password) {

        response.status(400).json({message: 'missing username or password'});

        return;
    }


    const admin = await Admins.findOne({username});

    if(admin) {

        response.status(400).json({message: 'username already exists'});

        return;
    }


    const newAdmin = new Admins({username});

    newAdmin.setPassword(password);

    await newAdmin.save();

    response.status(201).json({username, message: 'admininstrator created!'})

});


module.exports = router;
