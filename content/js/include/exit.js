function createExit(start_x, start_y, size){
  var toilet = Crafty.e("Exit, 2D, Canvas, toilet")
    .attr({ x:start_x, y:start_y, z:1 }),
    amount = 40,
    greenArrow = Crafty.e("2D, Canvas, Tween, greenArrow")
      .attr({ x: start_x-10, y: start_y-30, z: 2 })
      .bind('EnterFrame', function(){
        if (Math.round(this.y) === start_y-40 && amount === 40)
          amount = 30;
        if (Math.round(this.y) === start_y-30 && amount === 30)
          amount = 40;
        this.tween({ x: start_x-10, y: start_y-amount, z: 2 }, 5);
      });

  _.delay(function(){
    greenArrow.destroy();
  }, 2500);

  return toilet;
}
