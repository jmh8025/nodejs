var express = require('express');
var router = express.Router();
var flash = require('connect-flash');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/flash',function(req,res){
  req.session.message = '세션 메시지';
  req.flash('message','flash  메시지');
  res.redirect('/users/flash/result');
});

router.get('/flash/result',function(req,res){
  req.send(`${req.session.message} ${req.flash('message')}`);
});

module.exports = router;
