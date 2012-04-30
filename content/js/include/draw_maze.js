function drawMaze(fieldCount, fieldSize, timerSize, borderThickness, grid){

  function drawBlock(x, y){
    var blockType = Crafty.math.randomInt(1, 3);
    Crafty.e("Border, 2D, Canvas, block" + blockType).attr({ x:x, y:y });
  }

  function drawPowerup(grid_x, grid_y){
    var x = grid_x * (fieldSize + borderThickness) + borderThickness,
      y = grid_y * (fieldSize + borderThickness) + timerSize + borderThickness;
    Crafty.e("Powerup, 2D, Canvas, powerup").attr({ x:x, y:y });
  }

  function drawRightBlock(grid_x, grid_y){
    var x = (grid_x + 1) * (fieldSize + borderThickness),
      y = grid_y * (fieldSize + borderThickness) + timerSize + borderThickness;
    drawBlock(x, y);
  }

  function drawBottomBlock(grid_x, grid_y){
    var x = grid_x * (fieldSize + borderThickness) + borderThickness,
      y = (grid_y + 1) * (fieldSize + borderThickness) + timerSize;
    drawBlock(x, y);
  }

  function drawBottomRightBlock(grid_x, grid_y){
    var x = grid_x * (fieldSize + borderThickness) + borderThickness * 2,
      y = (grid_y + 1) * (fieldSize + borderThickness) + timerSize;
    drawBlock(x, y);
  }

  (function drawBorders(){
    _.times(fieldCount*2, function topBorder(n){
      var x = n * borderThickness,
        y = timerSize;
      drawBlock(x, y);
    });

    _.times(fieldCount*2, function leftBorder(n){
      var x = 0,
        y = borderThickness + (n * borderThickness) + timerSize;
      drawBlock(x, y);
    });

    _.times(fieldCount*2, function bottomBorder(n){
      var x = borderThickness + (n * borderThickness),
        y = fieldCount * 2 * borderThickness + timerSize;
      drawBlock(x, y);
    });

    _.times(fieldCount*2, function rightBorder(n){
      var x = fieldCount * 2 * borderThickness,
        y = n * borderThickness + timerSize;
      drawBlock(x, y);
    });
  })();

  _.times(grid.length, function(x){
    _.times(grid[x].length, function(y){
      var current = grid[x][y],
        bottom = (y === grid[x].length-1 ? {direction: 'n'} : grid[x][y+1]),
        right = (x === grid.length-1 ? {direction: 'w'} : grid[x+1][y]),
        ttop = (y === 0 ? {direction: 'n'} : grid[x][y-1]),
        left = (x === 0 ? {direction: 'w'} : grid[x-1][y]);

      if (!(current.direction === 'e') && !(right.direction === 'w'))
        drawRightBlock(x, y);

      if (!(current.direction === 's') && !(bottom.direction === 'n'))
        drawBottomBlock(x, y);

      if (!(y === grid[x].length-1) && !(x === grid.length-1))
        drawBottomRightBlock(x, y);

      var count = 0;
      count += (bottom.direction === 'n');
      count += (right.direction === 'w');
      count += (ttop.direction === 's');
      count += (left.direction === 'e');
      if (!count)
        if (Crafty.math.randomInt(1, difficulty) === difficulty/2)
          drawPowerup(x, y);
    });
  });
}
