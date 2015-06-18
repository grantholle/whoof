var Player = require('player');

module.exports = function () {

  var player = new Player(__dirname + '/whoof.mp3');

  player.play();

  setTimeout(function () {
    player.stop();
  }, 500);

}