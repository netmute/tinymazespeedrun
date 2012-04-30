var difficulty,
  score,
  easy = { size: 18, text: 'tiny room'},
  medium = { size: 26, text: 'normal room'},
  hard = { size: 34, text: 'huge room'};

window.onload = function () {
  var manifest = [
    {id:"confirm", src:"audio/confirm.mp3"},
    {id:"teleport", src:"audio/teleport.mp3"},
    {id:"destroy", src:"audio/destroy.mp3"},
    {id:"powerup", src:"audio/powerup.mp3"}
  ];
  preload = new PreloadJS();
  preload.installPlugin(SoundJS);
  preload.onComplete = function() {
    Crafty.scene("intro");
  }
  preload.loadManifest(manifest);
};
