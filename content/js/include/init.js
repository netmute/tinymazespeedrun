var score,
  easy = { size: 18, difficulty: 'easy', text: 'tiny room'},
  medium = { size: 26, difficulty: 'medium', text: 'normal room'},
  hard = { size: 34, difficulty: 'hard', text: 'huge room'},
  mode;

window.onload = function(){

  var manifest = [
      {id:"confirm", src:"audio/confirm.mp3"},
      {id:"teleport", src:"audio/teleport.mp3"},
      {id:"destroy", src:"audio/destroy.mp3"},
      {id:"powerup", src:"audio/powerup.mp3"},
      {id:"music", src:"audio/music.mp3"}
    ],
    target = _.first($('#container')),
    spinner = new Spinner({color:'#000'}).spin(target),
    preload = new PreloadJS();

  preload.installPlugin(SoundJS);
  preload.onComplete = function(){
    Crafty.scene("intro");
    spinner.stop();
  }
  preload.loadManifest(manifest);

};
