Crafty.scene("intro", function(){
  var offset = 110,
    buttonWidth = 150,
    buttonHeigth = 20,
    buttonPadding = 55;

  Crafty.init(800, 710);

  var image = Crafty.e("2D, Canvas, introImage").attr({ y:0, x:offset});

  Crafty.e("2D, Canvas, Color, Text, Mouse")
    .attr({ y: image.h + 20,
            x: offset + 20,
            w:buttonWidth,
            h:buttonHeigth })
    .bind('Click', function(){
      mode = easy;
      this.text('loading...');
      SoundJS.play('confirm');
      _.delay(function(){
        Crafty.scene('game');
      }, 500);
    })
    .text(easy.text)
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial', weight: 'normal'})
    .textColor('#FFFFFF');

  Crafty.e("2D, Canvas, Color, Text, Mouse")
    .attr({ y: image.h + 20,
            x: offset + 20 + 1 * (buttonWidth + buttonPadding),
            w:buttonWidth,
            h:buttonHeigth })
    .bind('Click', function(){
      mode = medium;
      this.text('loading...');
      SoundJS.play('confirm');
      _.delay(function(){
        Crafty.scene('game');
      }, 500);
    })
    .text(medium.text)
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial', weight: 'normal'})
    .textColor('#FFFFFF');

  Crafty.e("2D, Canvas, Color, Text, Mouse")
    .attr({ y: image.h + 20,
            x: offset + 20 + 2 * (buttonWidth + buttonPadding),
            w:buttonWidth,
            h:buttonHeigth })
    .bind('Click', function(){
      mode = hard;
      this.text('loading...');
      SoundJS.play('confirm');
      _.delay(function(){
        Crafty.scene('game');
      }, 500);
    })
    .text(hard.text)
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial', weight: 'normal'})
    .textColor('#FFFFFF');

  Crafty.e("2D, Canvas, Color, Text, Mouse")
    .attr({ y: image.h - 20,
            x: offset + 20 + 1 * (buttonWidth + buttonPadding),
            w:buttonWidth,
            h:buttonHeigth })
    .bind('Click', function(){
      this.text('loading...');
      SoundJS.play('confirm');
      _.delay(function(){
        Crafty.scene('highscores');
      }, 500);
    })
    .text('highscores')
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial', weight: 'normal'})
    .textColor('#FFFFFF');

});
