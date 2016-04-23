"use strict";

// check if is component
if (require.modules) {
  var spn = require('shortcut-picker-nwjs');
  var assert = require('timoxley-assert');
} else {
  var spn = require('../');
  var assert = require('assert');
}

it('can return a charcode from a letter', function() {
  assert.strictEqual(spn('0'), 48);
  assert.strictEqual(spn('B'), 66);
  assert.strictEqual(spn('f1'), 112);
  assert.strictEqual(spn('9'), 57);
  assert.strictEqual(spn('numpad 0'), 96);
})


it('can use aliases from a letter', function() {
  assert.strictEqual(spn('ctl'), spn('ctrl'));
})

it('does not use alias name when mapping back from a number', function() {
  for (var key in spn.aliases) {
    assert.notStrictEqual(spn(spn(key)), key);
  }
})

it('is case insensitive', function() {
  assert.strictEqual(spn('a'), 65);
  assert.strictEqual(spn('A'), 65);
  assert.strictEqual(spn('enter'), 13);
  assert.strictEqual(spn('ENTER'), 13);
  assert.strictEqual(spn('enTeR'), 13);
})

it('returns char code for strange chars', function() {
  // TODO: not sure if this is sensible behaviour
  assert.strictEqual(spn('∆'), 8710);
  assert.strictEqual(spn('漢'), 28450);
})

it('returns undefined for unknown strings', function() {
  assert.strictEqual(spn('ants'), undefined);
  assert.strictEqual(spn('Bagels'), undefined);
  assert.strictEqual(spn(''), undefined);
  assert.strictEqual(spn('JKHG KJG LSDF'), undefined);
})

it('returns undefined for unknown numbers', function() {
  assert.strictEqual(spn(-1), undefined);
  assert.strictEqual(spn(Infinity), undefined);
  assert.strictEqual(spn(0.3), undefined);
  assert.strictEqual(spn(9999999), undefined);
})

it('returns code for objects implementing toString function', function() {
  var obj = {}
  obj.toString = function() {
    return 'a'
  }
  assert.strictEqual(spn(obj), 65);
})

it('returns char for objects with a spn property', function() {
  var obj = { spn: 65 }
  assert.strictEqual(spn(obj), 'a');
})

it('returns undefined for any other passed in type', function() {
  assert.strictEqual(spn({}), undefined);
  assert.strictEqual(spn([]), undefined);
  assert.strictEqual(spn([1,2]), undefined);
  assert.strictEqual(spn(null), undefined);
  assert.strictEqual(spn(undefined), undefined);
  assert.strictEqual(spn(/.*/), undefined);
  assert.strictEqual(spn(), undefined);
})

it('is commutative', function() {
  for (var key in spn.code) {
    assert.strictEqual(spn(key), spn(spn(spn(key))))
  }
})

it('exposes spn/name maps', function() {
  for (var code in spn.codes) {
    assert.strictEqual(spn(code), spn(spn.names[spn.codes[code]]))
  }
})

it('should return shift, ctrl, and alt for 16, 17, and 18', function() {
  assert.strictEqual(spn(16), 'shift')
  assert.strictEqual(spn(17), 'ctrl')
  assert.strictEqual(spn(18), 'alt')
})
