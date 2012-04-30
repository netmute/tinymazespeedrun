function drawMaze(fieldCount, fieldSize, timerSize, borderThickness, grid){

  function drawBlock(x, y){
    var blockType = Crafty.math.randomInt(1, 3);
    Crafty.e("Border, 2D, Canvas, block" + blockType).attr({ x:x, y:y });
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
        bottom = (y === grid[x].length-1 ? 'n' : grid[x][y+1]),
        right = (x === grid.length-1 ? 'w' : grid[x+1][y]);

      if (!(current === 'e') && !(right === 'w'))
        drawRightBlock(x, y);

      if (!(current === 's') && !(bottom === 'n'))
        drawBottomBlock(x, y);

      if (!(y === grid[x].length-1) && !(x === grid.length-1))
        drawBottomRightBlock(x, y);

      // DEBUG
      // Crafty.e("2D, Canvas, Text")
      //   .attr({ w: fieldSize, h: fieldSize, x: borderThickness+x*(fieldSize+borderThickness), y: borderThickness+y*(fieldSize+borderThickness)+timerSize })
      //   .textFont({size:'10px', family:'Helvetica Neue'})
      //   .textColor('#FF0000')
      //   .text(current);
    });
  });
}
