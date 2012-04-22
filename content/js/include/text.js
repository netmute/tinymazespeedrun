function drawText(text, size, x, y){
  Crafty.e("2D, Canvas, Text")
    .attr({ y:y, x:x, w:150, h:size })
    .textFont({size:size+'px', family:'Arial', weight: 'normal'})
    .textColor('#000000')
    .text(text);
}

function wait(milliseconds) {
  console.log('waiting');
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++)
    if ((new Date().getTime() - start) > milliseconds)
      break;
}
