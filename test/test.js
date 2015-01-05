var test = require('tinytap');

var assert = require('assert');
var async = require('async');
var tessel = require('tessel');
var backpackLib = require('../');

var portname = process.argv[2] || 'A';
var requireTime = new Date(milliseconds);
var backpack;

test.count(1);

async.series([
  test('Connecting to backpack module', function (t) {
    backpack = backpackLib.use(tessel.port[portname], function (err, backpack) {
      t.ok(backpack, 'The backpack module object was not returned');
      t.equal(err, undefined, 'There was an error connecting');

      var timeout = 1000;

      var readyTimer = setTimeout(function () {
        t.ok(false, 'Failed to emit ready event in a reasonable amount of time.');
        t.end();
      }, timeout);
      backpack.on('ready', function() {
        clearTimeout(readyTimer);
        t.ok(true, 'ready was emitted');
      });

      backpack.on('error', function (err) {
        t.ok(false, 'error caught: ' + err);
        t.end();
      });
    });
  }),

  ], function (err) {
    console.log('error running tests', err);
});
