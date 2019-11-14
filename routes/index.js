var express = require('express');
var router = express.Router();
var youtubeStream = require("youtube-audio-stream");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/stream', (req, res) => {
  youtubeStream("https://www.youtube.com/watch?v=fcI5rNR5TGM").pipe(res)
})

module.exports = router;
