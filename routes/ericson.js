var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ericson', { title: 'Ericson Williams' });
});

router.delete('/', function(req, res) {
  res.send("Cannot DELETE anything on this page, homey");
});

router.get('/:username/comments', function(req, res){
  var username = req.params.username;
  res.send("You wanna check out some comments, do you, " + username + "?");
  console.log(req.params);
});

router.get('/:username/comments/:commentid', function(req, res){
  var username = req.params.username;
  var commentId = req.params.commentid;
  res.send("So, you are looking for comment # " + commentId + " by " + username + "?");
});

module.exports = router;