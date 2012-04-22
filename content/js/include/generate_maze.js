function generateMaze(x, y){
  var grid = generateGrid(x, y);

  return carvePassagesFrom(0, Math.round(y/2), grid);
}

function generateGrid(x, y){
  return _.map(_.range(x), function(){
    return new Array(y);
  });
}

function carvePassagesFrom(cx, cy, grid){
  var directions = _.shuffle([{name:'n', opposite:'s', coords:{x:0, y:-1}},
                              {name:'e', opposite:'w', coords:{x:1, y:0}},
                              {name:'s', opposite:'n', coords:{x:0, y:1}},
                              {name:'w', opposite:'e', coords:{x:-1, y:0}}]);

  _.each(directions, function(direction){
    var nx = cx + direction.coords.x, ny = cy + direction.coords.y;

    if (ny >= 0 && ny < grid.length)
      if (nx >= 0 && nx < grid[ny].length)
        if (!grid[nx][ny]){
          grid[cx][cy] || (grid[cx][cy] = direction.name);
          grid[nx][ny] = direction.opposite;
          carvePassagesFrom(nx, ny, grid);
        }
  });
  return grid;
}
