var tessel = require("tessel");
var backpack = require('../').use(tessel.port['A']);

backpack.on('ready', function() {
  backpack.clear();
  var bitmap = [
    [0,0,1,1,1,1,0,0],
    [0,1,0,0,0,0,1,0],
    [1,0,1,0,0,1,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,1,0,0,1,0,1],
    [1,0,0,1,1,0,0,1],
    [0,1,0,0,0,0,1,0],
    [0,0,1,1,1,1,0,0],
  ];
  backpack.writeBitmap(bitmap);
});

