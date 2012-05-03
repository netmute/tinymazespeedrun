function drawText(text, size, x, y){
  Crafty.e("2D, Canvas, Text")
    .attr({ y:y, x:x, w:150, h:size })
    .textFont({size:size+'px', family:'Arial', weight: 'normal'})
    .textColor('#000000')
    .text(text);
}

function capitaliseFirstLetter(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
