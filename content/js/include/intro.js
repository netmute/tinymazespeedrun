Crafty.scene("intro", function () {
  var offset = 110;

  Crafty.init(800,630);
  Crafty.e("2D, Canvas, Image")
    .image("img/intro.png")

  Crafty.e("2D, Canvas, Color, Text, Mouse")
    .attr({ y:350, x:45+offset, w:150, h:20 })
    .bind('Click', function(){
      difficulty = 30;
      Crafty.scene('game');
    })
    .text('Easy mode')
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial', weight: 'normal'})
    .textColor('#FFFFFF')

  Crafty.e("2D, Canvas, Color, Text, Mouse")
    .attr({ y:350, x:220+offset, w:150, h:20 })
    .bind('Click', function(){
      difficulty = 40;
      Crafty.scene('game');
    })
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial', weight: 'normal'})
    .textColor('#FFFFFF')
    .text('Medium mode')

  Crafty.e("2D, Canvas, Color, Text, Mouse")
    .attr({ y:350, x:395+offset, w:150, h:20 })
    .bind('Click', function(){
      difficulty = 50;
      Crafty.scene('game');
    })
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial', weight: 'normal'})
    .textColor('#FFFFFF')
    .text('Hard mode')

});
