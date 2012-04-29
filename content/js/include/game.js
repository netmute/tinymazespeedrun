Crafty.scene("game", function () {

  var fieldSize = 10,
      fieldCount = difficulty;
      borderThickness = 10,
      timerSize = 20,
      playingFieldX = (fieldSize+borderThickness)*fieldCount+borderThickness,
      playingFieldY = (fieldSize+borderThickness)*fieldCount+borderThickness;

  Crafty.init(playingFieldX, playingFieldY+timerSize);
  Crafty.background('rgb(255,255,255)');
  drawText('TinyMazeSpeedrun',timerSize - 2, 0, 0);

  var maze = generateMaze(fieldCount, fieldCount),
      horizontalCenter = (fieldSize+borderThickness)*(fieldCount/2),
      playerSize = Math.round(fieldSize*0.8),
      paddingToBorder = Math.floor((fieldSize-playerSize)/2)+borderThickness;

  drawMaze(fieldCount, fieldSize, timerSize, borderThickness, maze);
  timer = drawTimer(timerSize - 2, playingFieldX);
  createPlayer(paddingToBorder, horizontalCenter+paddingToBorder+timerSize, playerSize, 3, timer);
  createExit(playingFieldX-playerSize-paddingToBorder, horizontalCenter+paddingToBorder+timerSize, playerSize);

});
