Crafty.scene("game", function(){

  var fieldSize = 10,
    fieldCount = mode.size;
    borderThickness = 10,
    timerSize = 20,
    playingFieldX = (fieldSize+borderThickness)*fieldCount+borderThickness,
    playingFieldY = (fieldSize+borderThickness)*fieldCount+borderThickness;

  Crafty.init(playingFieldX, playingFieldY+timerSize);
  Crafty.background('rgb(255,255,255)');
  drawText('Tiny Maze Speedrun',timerSize - 2, 0, 0);

  var maze = generateMaze(fieldCount, fieldCount),
    horizontalCenter = (fieldSize+borderThickness)*(fieldCount/2),
    playerSize = Math.round(fieldSize*0.8),
    playerSpeed = 3,
    paddingToBorder = Math.floor((fieldSize-playerSize)/2)+borderThickness,
    timer = drawTimer(timerSize - 2, playingFieldX),
    music = playLoud('music');

  drawMaze(fieldCount, fieldSize, timerSize, borderThickness, maze);
  createPlayer(paddingToBorder, horizontalCenter+paddingToBorder+timerSize, playerSize, playerSpeed, timer, playingFieldX, timerSize, music);
  createExit(playingFieldX-playerSize-paddingToBorder, horizontalCenter+paddingToBorder+timerSize, playerSize);

});
