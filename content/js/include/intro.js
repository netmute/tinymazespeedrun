Crafty.scene("intro", function () {
  var offset = 110;

  Crafty.init(800, 710);
  Crafty.e("2D, Canvas, Image")
    .image("img/intro.png")

  Crafty.e("2D, Canvas, Color, Text, Mouse")
    .attr({ y:350, x:45+offset, w:150, h:20 })
    .bind('Click', function(){
      difficulty = easy.size;
      this.text('loading...');
      setTimeout(function(){
        Crafty.scene('game');
      }, 100);
    })
    .text(easy.text)
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial', weight: 'normal'})
    .textColor('#FFFFFF')

  Crafty.e("2D, Canvas, Color, Text, Mouse")
    .attr({ y:350, x:220+offset, w:150, h:20 })
    .bind('Click', function(){
      difficulty = medium.size;
      this.text('loading...');
      setTimeout(function(){
        Crafty.scene('game');
      }, 100);
    })
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial', weight: 'normal'})
    .textColor('#FFFFFF')
    .text(medium.text)

  Crafty.e("2D, Canvas, Color, Text, Mouse")
    .attr({ y:350, x:395+offset, w:150, h:20 })
    .bind('Click', function(){
      difficulty = hard.size;
      this.text('loading...');
      setTimeout(function(){
        Crafty.scene('game');
      }, 100);
    })
    .color('rgb(63,63,63)')
    .textFont({size:'20px', family:'Arial', weight: 'normal'})
    .textColor('#FFFFFF')
    .text(hard.text)

});
