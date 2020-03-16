
const express = require('express');
const router  = express.Router()

const ckeckAuth = require('../auth/check');

router.use(
  (req,res,next)=> {
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "*" );
    next();
  }
);

router.use( ckeckAuth );

router.post('/check', (req,res)=>{
  res.json({ success: true })
});

module.exports = router;
