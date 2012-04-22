function createPlayer(start_x, start_y, size, speed, timer){
  return Crafty.e("Player, 2D, Canvas, Fourway, Collision, SpriteAnimation, player")
          .attr({ x:start_x, y:start_y, z:1 })
          .fourway(speed)
          .animate("walk_left", 6, 0, 8)
          .animate("walk_right", 9, 0, 11)
          .animate("walk_up", 3, 0, 5)
          .animate("walk_down", 0, 0, 2)
          .bind("NewDirection", function(direction){
            if (direction.x < 0)
              if (!this.isPlaying("walk_left"))
                this.stop().animate("walk_left", speed, -1);
            if (direction.x > 0)
              if (!this.isPlaying("walk_right"))
                this.stop().animate("walk_right", speed, -1);
            if (direction.y < 0)
              if (!this.isPlaying("walk_up"))
                this.stop().animate("walk_up", speed, -1);
            if (direction.y > 0)
              if (!this.isPlaying("walk_down"))
                this.stop().animate("walk_down", speed, -1);
            if(!direction.x && !direction.y)
              this.stop();
          })
          .bind('Moved', function(from){
            if(this.hit('Border'))
              this.attr({x: from.x, y:from.y});
            if(this.hit('Exit')) {
              timer.stop();
              score = timer.duration();
              Crafty.scene('outro');
            }
          });
}
