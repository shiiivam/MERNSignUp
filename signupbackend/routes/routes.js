const express = require('express');
const router = express.Router()
const SignUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup',(req,res)=>{
    const signedUpuser = new SignUpTemplateCopy({
        fullname:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    signedUpuser.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })

})

module.exports = router;