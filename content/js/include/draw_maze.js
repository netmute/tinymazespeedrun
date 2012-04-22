function drawMaze(fieldSize, timerSize, borderThickness, grid){
  _.each(_.range(grid.length), function(x){
    _.each(_.range(grid[x].length), function(y){
      var current = grid[x][y],
          bottom = grid[x][y+1],
          right = (x === grid.length-1 ? 'w' : grid[x+1][y]);

      if (!(current === 'e') && !(right === 'w'))
        drawRightBorder(x, y, fieldSize, borderThickness, timerSize);
      if (!(current === 's') && !(bottom === 'n'))
        drawBottomBorder(x, y, fieldSize, borderThickness, timerSize);

      // Crafty.e("2D, Canvas, Text")
      //   .attr({ w: fieldSize, h: fieldSize, x: x*(fieldSize+borderThickness)+4, y: y*(fieldSize+borderThickness)-4 })
      //   .textFont({size:'18px', family:'Arial'})
      //   .textColor('#FF0000')
      //   .text(current);
    });
  });
}

function drawRightBorder(grid_x, grid_y, fieldSize, borderThickness, timerSize){
  var x = (grid_x + 1) * (fieldSize + borderThickness),
      y = grid_y * (fieldSize + borderThickness) + timerSize,
      length = fieldSize+(borderThickness*2);

  Crafty.e("Border, 2D, Canvas, Color")
    .color('rgb(0,0,0)')
    .attr({x:x, y:y, w:borderThickness, h: length});
}

function drawBottomBorder(grid_x, grid_y, fieldSize, borderThickness, timerSize){
  var x = grid_x * (fieldSize + borderThickness),
      y = (grid_y + 1) * (fieldSize + borderThickness) + timerSize,
      length = fieldSize+(borderThickness*2);

  Crafty.e("Border, 2D, Canvas, Color")
    .color('rgb(0,0,0)')
    .attr({x:x, y:y, w:length, h: borderThickness});
}
