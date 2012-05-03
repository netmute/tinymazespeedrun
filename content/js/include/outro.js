Crafty.scene("outro", function(){
  var height = 700,
    width = 600,
    offset = 0;

  Crafty.init(width, height);
  Crafty.e("2D, Canvas, outroImage").attr({ y:0, x:offset});

  var scoreText = Crafty.e("2D, Canvas, Text, Tween")
      .attr({ y:180, x:170, w:150, h:20 })
      .textFont({size:'20px', family:'Arial', weight:'normal'})
      .textColor('#000000')
      .text('' + score + ' seconds (' + mode.text + ')');

  var button = Crafty.e("2D, Canvas, Color, Text, Tween, Mouse")
    .attr({ y:610, x:(width-150)/2+offset, w:150, h:20 })
    .bind('Click', function(){
      this.text('loading...');
      SoundJS.play('confirm');
      _.delay(function(){
        $('#submit_score').remove();
        $('#name_entry').remove();
        Crafty.scene('intro');
      }, 500);
    })
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial'})
    .textColor('#FFFFFF')
    .text('play again!');

  _.delay(function(){
    scoreText.tween({ x:(width-scoreText.w)/2+offset }, 1);
    button.tween({ x:(width-button.w)/2+offset }, 1);
  }, 50);

  drawHighscore();

});

function drawHighscore(score_id){
  $.getJSON('/scores/?mode=' + mode.difficulty + '&' + Date.now(), function(highscores){

    if (score < _.last(highscores).score) {
      $('.container').append('<input type="text" value="Anonymous" id="name_entry"></input>');
      $('.container').append('<input type="button" value="Submit score" id="submit_score"></input>');

      $('#name_entry').bind('focus', function(){
        $(this).prop('value', '');
      });

      $('#submit_score').bind('click', function(){
        var data = {name: $('#name_entry').prop('value'),
          mode: mode.difficulty,
          score: score}

        $.post('/scores/', data, function(response){
          score = 9999;
          $('#submit_score').remove();
          $('#name_entry').remove();
          Crafty('Scores').destroy();
          drawHighscore(response.id);
        }, 'json');
      });
    }

    Crafty.e("Scores, 2D, Canvas, Text, Tween")
      .attr({ y:250, x:165, w:150, h:20 })
      .textFont({size:'20px', family:'Arial', weight:'normal'})
      .textColor('#000000')
      .text('Top 10 scores for ' + mode.text + ':');

    _.each(highscores, function(highscore){
      var index = _.indexOf(highscores, highscore),
        padding = 30 * index,
        color = highscore.id === score_id ? '#FF0000' : '#000000';

      Crafty.e("Scores, 2D, Canvas, Text, Tween")
        .attr({ y:290+padding, x:185, w:150, h:20 })
        .textFont({size:'20px', family:'Arial', weight:'normal'})
        .textColor(color)
        .text('' + (index+1) + ': ' + highscore.name + ', ' + highscore.score + ' seconds');

    });

    _.delay(function(){
      _.each(Crafty('Scores'), function(e){
        Crafty(e).tween({ x:(600-Crafty(e).w)/2 }, 1);
      });
    }, 50);

  });
}
