function createPlayer(start_x, start_y, size, speed, timer, maxOuterBounds, minTopBounds, music){

  function destroyBlock(block, player, from){
    playSilent('destroy');
    Crafty.e("2D, Canvas, debris").attr({ x:block.x, y:block.y });
    block.destroy();
    if (player.x != from.x)
      player.attr({x: from.x-speed});
    if (player.y != from.y)
      player.attr({y: from.y-speed});
  }

  function finishGame(){
    fadeOut(music);
    timer.stop();
    score = timer.duration();
    Crafty.scene('outro');
  }

  var player = Crafty.e("Player, 2D, Canvas, Fourway, Collision, SpriteAnimation, player")
    .attr({ x:start_x, y:start_y, z:1 })
    .fourway(speed)
    .animate("walk_left", 6, 0, 8)
    .animate("walk_right", 9, 0, 11)
    .animate("walk_up", 3, 0, 5)
    .animate("walk_down", 0, 0, 2)
    .bind("NewDirection", function(direction){
    if (direction.x < 0)
      if (!this.isPlaying("walk_left"))
        this.stop().animate("walk_left", 3, -1);
    if (direction.x > 0)
      if (!this.isPlaying("walk_right"))
        this.stop().animate("walk_right", 3, -1);
    if (direction.y < 0)
      if (!this.isPlaying("walk_up"))
        this.stop().animate("walk_up", 3, -1);
    if (direction.y > 0)
      if (!this.isPlaying("walk_down"))
        this.stop().animate("walk_down", 3, -1);
    if(!direction.x && !direction.y)
      this.stop();
    })
    .bind('Moved', function(from){
      // detect collision with blocks
      if (this.hit('Border')) {
        if (this.isGod) {
          var block = _.first(this.hit('Border')).obj
          destroyBlock(block, this, from);
        } else {
          this.attr({x: from.x, y: from.y});
        }
      }
      // detect if player collected powerup
      if (this.hit('Powerup')) {
        var powerup = _.first(this.hit('Powerup')).obj
        playSilent('powerup');
        this.isGod = true;
        powerup.destroy();
        _.delay(function(player){
          player.isGod = false;
        }, 1000, this);
      }
      // detect if exit reached
      if (this.hit('Exit')) {
        finishGame();
      }
      // detect if player is leaving the playing field
      if ((this.x < 0) ||
        (this.x > maxOuterBounds) ||
        (this.y < minTopBounds) ||
        (this.y > maxOuterBounds + minTopBounds)) {
          playSilent('teleport');
          this.attr({x: start_x, y:start_y});
      }
    }),
    amount = 40,
    blueArrow = Crafty.e("2D, Canvas, Tween, blueArrow")
      .attr({ x: player.x-10, y: player.y-30, z: 2 })
      .bind('EnterFrame', function(){
        if (Math.round(this.y) === player.y-40 && amount === 40)
          amount = 30;
        if (Math.round(this.y) === player.y-30 && amount === 30)
          amount = 40;
        this.tween({ x: player.x-10, y: player.y-amount, z: 2 }, 5);
      });

  _.delay(function(){
    blueArrow.destroy();
  }, 2500);

  return player;
}
