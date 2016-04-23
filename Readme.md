# shortcut-picker-nwjs (spn)

Key picker for nw.js

## Installation

#### npm

```sh
$ npm install shortcut-picker-nwjs
```

## Example

```js
// example
})
```

## API

### Name Aliases

Common aliases are also supplied:

```js
> for (var alias in spn.aliases) { console.log(alias, spn(spn(alias))) }
ctl ctrl
pause pause/break
break pause/break
caps caps lock
escape esc
pgup page up
pgdn page up
ins insert
del delete
spc space
```

## Maps

Key code/name maps are available directly as `spn.codes` and `spn.names` respectively.

```js
spn.names[13] // => 'enter'
spn.codes['Enter'] // => 13
```

## Credit

```
 project  : spn
 repo age : 2 years, 4 months
 active   : 19 days
 commits  : 48
 files    : 13
 authors  :
    26	Tim Oxley        54.2%
    10	Tim              20.8%
     4	jkroso           8.3%
     3	Amir Abu Shareb  6.2%
     1	TJ Holowaychuk   2.1%
     1	Nathan Zadoks    2.1%
     1	Kenan Yildirim   2.1%
     1	Yoshua Wuyts     2.1%
     1	Greg Reimer      2.1%
```

Original key mappings lifted from http://jsfiddle.net/vWx8V/ via http://stackoverflow.com/questions/5603195/full-list-of-javascript-shortcut-picker-nwjss

## License

[MIT](http://opensource.org/licenses/mit-license.php)
