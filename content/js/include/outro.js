Crafty.scene("outro", function () {
  if (difficulty === easy.size)
    var scoreText = easy.text + ': ' + score + ' seconds';
  if (difficulty === medium.size)
    var scoreText = medium.text + ': ' + score + ' seconds';
  if (difficulty === hard.size)
    var scoreText = hard.text + ': ' + score + ' seconds';

  Crafty.init(600, 400);
  Crafty.e("2D, Canvas, outroImage").attr({ y:0, x:0});

  Crafty.e("2D, Canvas, Text")
    .attr({ y:180, x:165, w:150, h:20 })
    .textFont({size:'20px', family:'Arial', weight: 'bold'})
    .textColor('#000000')
    .text(scoreText);

  Crafty.e("2D, Canvas, Color, Text, Mouse")
    .attr({ y:300, x:220, w:150, h:20 })
    .bind('Click', function(){
      this.text('loading...');
      SoundJS.play('confirm');
      _.delay(function(){
        Crafty.scene('intro');
      }, 500);
    })
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial'})
    .textColor('#FFFFFF')
    .text('Play again!');
});
