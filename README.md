# Backpack-HT16K33
Driver for the HT16K33 backpack from [Adafruit](https://learn.adafruit.com/adafruit-led-backpack/1-2-8x8-matrix) The documentation for the chip can be found [here](http://www.adafruit.com/datasheets/ht16K33v110.pdf).

If you run into any issues please create a [ticket](https://github.com/BinaryNoggin/backpack-ht16k33/issues).

### Setup
  The backpack has four connections +, -, D, and C. They need to be hooked to 3.3V, GND, SDA, and SCL, respectively, of a module port. The module supports both 3.3V and 5V. It works better at 5V, but will need an external power source.

### Installation
```sh
npm install backpack-ht16k33
```

### Example
```js
var tessel = require("tessel");
var backpack = require('backpack-ht16k33').use(tessel.port['A']);

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

```

### Methods
&#x20;<a href="#api-backpack-clear-callback-err" name="api-backpack-clear-callback-err">#</a> backpack<b>.clear</b> ( callback(err) ) turns off every light on the led

&#x20;<a href="#api-backpack-writeBitmap-bitmap-callback-err" name="api-backpack-writeBitmap-bitmap-callback-err">#</a> backpack<b>.writeBitmap</b> ( bitmap, callback(err) ) the bitmap is and array of bits. Each 1 will be turned on and the 0 will be turned off.

&#x20;<a href="#api-backpack-animate-callback-err" name="api-backpack-animate-callback-err">#</a> backpack<b>.animate</b> ( frames, interval ) renders each frame in order with a separation in ms equal to the interval

&#x20;<a href="#api-backpack-scroll-callback-err" name="api-backpack-scroll-callback-err">#</a> backpack<b>.scroll</b> ( bitmap, interval ) scrolls the bitmap horizontally with a separation between frames in ms equal to the interval. Bitmap can be any width

&#x20;<a href="#api-backpack-scrolltext-callback-err" name="#api-backpack-scrolltext-callback-err">#</a> backpack<b>.scrollText</b> ( text, interval ) scrolls the text horizontally with a separation between frames in ms equal to the interval. Text can be any lenght

### Events
&#x20;<a href="#api-backpack-on-error-callback-err-Emitted-upon-error" name="api-backpack-on-error-callback-err-Emitted-upon-error">#</a> backpack<b>.on</b>( 'error', callback(err) ) Emitted upon error.

&#x20;<a href="#api-backpack-on-ready-callback-Emitted-upon-first-successful-communication-between-the-Tessel-and-the-module" name="api-backpack-on-ready-callback-Emitted-upon-first-successful-communication-between-the-Tessel-and-the-module">#</a> backpack<b>.on</b>( 'ready', callback() ) Emitted upon first successful communication between the Tessel and the module.

### Further Examples
```js
var tessel = require("tessel");
var backpack = require('../').use(tessel.port['A']);

backpack.on('ready', function() {
  backpack.clear();
  var smile = [
    [0,0,1,1,1,1,0,0],
    [0,1,0,0,0,0,1,0],
    [1,0,1,0,0,1,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,1,0,0,1,0,1],
    [1,0,0,1,1,0,0,1],
    [0,1,0,0,0,0,1,0],
    [0,0,1,1,1,1,0,0],
  ];

  var straight = [
    [0,0,1,1,1,1,0,0],
    [0,1,0,0,0,0,1,0],
    [1,0,1,0,0,1,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1],
    [0,1,0,0,0,0,1,0],
    [0,0,1,1,1,1,0,0],
  ];

  var frown = [
    [0,0,1,1,1,1,0,0],
    [0,1,0,0,0,0,1,0],
    [1,0,1,0,0,1,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,1,1,0,0,1],
    [1,0,1,0,0,1,0,1],
    [0,1,0,0,0,0,1,0],
    [0,0,1,1,1,1,0,0],
  ];

  var frames = [smile, straight, frown];
  backpack.animate(frames, 500);
});

```

### Hardware specifications and Advanced Information

### Licensing
MIT

### Copyright
Binary Noggin, LLC - 2015
