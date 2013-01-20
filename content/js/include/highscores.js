Crafty.scene("highscores", function(){
  Crafty.init(800, 710);
  Crafty.e("2D, Canvas, highscoresImage").attr({ y:0, x:0});

  var refreshScores = setInterval(getAndDrawScores, 30000),
    button = Crafty.e("2D, Canvas, Color, Text, Tween, Mouse")
    .attr({ y:510, x:100, w:150, h:20 })
    .bind('Click', function(){
      this.text('loading...');
      clearInterval(refreshScores);
      playSilent('confirm');
      _.delay(function(){
        Crafty.scene('intro');
      }, 50);
    })
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial'})
    .textColor('#FFFFFF')
    .text('main menu');

  _.delay(function(){
    button.tween({ x:(800-button.w)/2 }, 1);
  }, 50);

  getAndDrawScores();

});

function getAndDrawScores(){
  getAndDrawScore(easy, 0*264+4);
  getAndDrawScore(medium, 1*264+4);
  getAndDrawScore(hard, 2*264+4);
}

function getAndDrawScore(mode, offset){
  var scoreAPI = "http://highscores.simonernst.com/tinymaze";
  $.getJSON(scoreAPI + '?reverse=true&scope=' + mode.difficulty + '&' + Date.now(), function(highscores){

    Crafty('Scores_' + mode.difficulty).destroy();

    Crafty.e("Scores_" + mode.difficulty + ", 2D, Canvas, Text, Tween")
      .attr({ y:130, x:offset, w:150, h:20 })
      .textFont({size:'20px', family:'Arial', weight:'normal'})
      .textColor('#000000')
      .text(capitaliseFirstLetter(mode.text) + ':');

    _.each(highscores, function(highscore){
      var index = _.indexOf(highscores, highscore),
        padding = 30 * index,
        color =  '#000000';

      Crafty.e("Scores_" + mode.difficulty + ", 2D, Canvas, Text, Tween")
        .attr({ y:170+padding, x:offset, w:150, h:20 })
        .textFont({size:'20px', family:'Arial', weight:'normal'})
        .textColor(color)
        .text('' + (index+1) + ': ' + highscore.player + ', ' + highscore.score/100 + ' seconds');

    });

    _.delay(function(){
      _.each(Crafty('Scores_' + mode.difficulty), function(e){
        Crafty(e).tween({ x:(264-Crafty(e).w)/2+offset }, 1);
      });
    }, 50);

  });
}
