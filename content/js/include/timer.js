function Timer(){
  var startTime,
      stopTime,
      running = false;

  function getTime(){
    var day = new Date();
    return day.getTime();
  }

  this.start = function(){
    if (running)
      return;
    startTime = getTime();
    stopTime = null;
    running = true;
  }

  this.stop = function(){
    if (!running)
      return;
    stopTime = getTime();
    running = false;
  }

  this.duration = function(){
    if (running)
      stopTime = getTime();
    return ((stopTime - startTime) / 1000).toFixed(2);
  }
}

function drawTimer(size, screenWidth){
  var timer = new Timer;
  timer.start();
  Crafty.e("Timer, 2D, Canvas, Text")
    .attr({ y:0, x:screenWidth-142, w:100, h:size })
    .textFont({size:size+'px', family:'Arial', weight: 'normal'})
    .textColor('#000000')
    .bind('EnterFrame', function () {
      this.text('Your time: ' + timer.duration());
    });
  return timer;
}
