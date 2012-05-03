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

function playLoud(sound){
  return SoundJS.play(sound, SoundJS.INTERRUPT_ANY, 0, 0, -1, 1);
}

function playSilent(sound){
  return SoundJS.play(sound, SoundJS.INTERRUPT_NONE, 0, 0, 0, 0.2);
}

function fadeOut(soundInstance){
  if (!soundInstance) return;

  var volume = soundInstance.getVolume();
  if (volume < 0.2){
    soundInstance.stop();
  } else {
    soundInstance.setVolume(volume - 0.1);
    _.delay(fadeOut, 500, soundInstance);
  }
}
