function createPlayer(start_x, start_y, size, speed, timer, maxOuterBounds, minTopBounds){

  function destroyBlock(block, player, from){
    SoundJS.play('destroy');
    Crafty.e("2D, Canvas, debris").attr({ x:block.x, y:block.y });
    block.destroy();
    if (player.x != from.x)
      player.attr({x: from.x-speed});
    if (player.y != from.y)
      player.attr({y: from.y-speed});
  }

  function finishGame(){
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
    // detect if exit reached
    if (this.hit('Exit')) {
      finishGame();
    }
    // detect if player is leaving the playing field
    if ((this.x < 0) ||
      (this.x > maxOuterBounds) ||
      (this.y < minTopBounds) ||
      (this.y > maxOuterBounds + minTopBounds)) {
        SoundJS.play('teleport');
        this.attr({x: start_x, y:start_y});
    }
  });
  return player;
}
