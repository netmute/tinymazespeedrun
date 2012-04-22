Crafty.scene("outro", function () {

  var difficultyText
  if (difficulty === 30)
    difficultyText = 'easy mode.'
  if (difficulty === 40)
    difficultyText = 'medium mode.'
  if (difficulty === 50)
    difficultyText = 'hard mode.'

  Crafty.init(600, 400);
  Crafty.e("2D, Canvas, Image")
    .attr({w: Crafty.viewport.width, h: Crafty.viewport.height})
    .image("img/outro.png", "no-repeat");

  Crafty.e("2D, Canvas, Text")
    .attr({ y:180, x:150, w:150, h:20 })
    .textFont({size:'20px', family:'Arial', weight: 'bold'})
    .textColor('#000000')
    .text(score + ' seconds on ' + difficultyText)

  Crafty.e("2D, Canvas, Color, Text, Mouse")
    .attr({ y:300, x:220, w:150, h:20 })
    .bind('Click', function(){
      Crafty.scene('intro');
    })
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial'})
    .textColor('#FFFFFF')
    .text('Play again!')

});
