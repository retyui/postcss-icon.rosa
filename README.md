# postcss-icon.rosa

Icon set data for [postcss-icon plugin](https://github.com/retyui/postcss-icon), based on [CSS Icons, a pen by Rosa](https://codepen.io/RRoberts/pen/LxZwQP)

[![postcss-icon.rosa](https://raw.githubusercontent.com/retyui/postcss-icon.rosa/master/preview.png)](https://retyui.github.io/postcss-icon/rosa/)

## Install

```bash
npm install -D postcss-icon.rosa postcss-icon
# or
yarn add -D postcss-icon.rosa postcss-icon
```

## Input

```css
.custom-selector {
  @icon: rose-power; /* 'rose-' is Prefix , 'power' is name Icon*/
  color: gold;
  /* ... your css code */
}
```

## Output

```css
.custom-selector::after{
  content: '';
  /* ... */
}
/* after before i span if needed */
.custom-selector{
  color: #000;
  width: 20px;
  heigth: 20px;
  /* ... */
  color: gold;
  /* ... your css code */
}
```

## Use ([more examples](https://github.com/retyui/postcss-icon/tree/master/example/))

```js
const     postcss = require('postcss');
const postcssIcon = require('postcss-icon');

const CSS = `
.custom-selector {
  @icon: rose-power;
}`;

postcss(
  postcssIcon({
    "postcss-icon.rosa": {
      prefix: 'rose-' /* required when using multiple Icon data sets */
    },
    "postcss-icon.OtherSetName": { /* Options */ }
  })
).process(CSS).then(({css, messages}) => {
  console.log(css);
  messages
    .filter(i => i.type === "warning")
    .map(e => console.log(e.toString()));
});
```

## Other icon sets:

### Font icons:

- [postcss-icon.material-design](https://github.com/retyui/postcss-icon.material-design) (count icons : 932)
- [postcss-icon.font-awesome-v4](https://github.com/retyui/postcss-icon.font-awesome-v4) (count icons : 786)

### Css only icons:

- [postcss-icon.cssicon](https://github.com/retyui/postcss-icon.cssicon) (count icons : 192) [result demo](https://retyui.github.io/postcss-icon/cssicon/)
- [postcss-icon.icono](https://github.com/retyui/postcss-icon.icono) (count icons : 131) [result demo](https://retyui.github.io/postcss-icon/icono/)
- [postcss-icon.airpwn](https://github.com/retyui/postcss-icon.airpwn) (count icons : 39) [result demo](https://retyui.github.io/postcss-icon/airpwn/)
- [postcss-icon.stiffi](https://github.com/retyui/postcss-icon.stiffi) (count icons : 34) [result demo](https://retyui.github.io/postcss-icon/stiffi/)
- [postcss-icon.joshnh](https://github.com/retyui/postcss-icon.joshnh) (count icons : 24) [result demo](https://retyui.github.io/postcss-icon/joshnh/)

## All name icons (count: 78) [result demo](https://retyui.github.io/postcss-icon/rosa/)

`alert`, `backvideo`, `barchart`, `battery`, `bin`, `browser`, `calendar`, `calendarnumber`, `camera`, `chart`, `clipboard`, `clock`, `cloud`, `copy`, `crop`, `cross`, `cup`, `cursor`, `desktop`, `down`, `downarrow`, `download`, `earphones`, `envelope`, `envelopeoutline`, `eye`, `file`, `flagsquare`, `flagtriangle`, `folder`, `forwardvideo`, `hamburger`, `house`, `laptop`, `leftarrow`, `lightbulb`, `lock`, `magnify`, `magnifyminus`, `magnifyplus`, `map`, `message`, `microphone`, `music`, `pausevideo`, `pencil`, `phone`, `pie`, `pin`, `playvideo`, `plus`, `power`, `rain`, `refresh`, `rightarrow`, `signalfull`, `signalone`, `signaltwo`, `speaker`, `speakermute`, `stop`, `stopvideo`, `tag`, `tennis`, `tick`, `timer`, `toggle`, `tree`, `umberella`, `unlocked`, `up`, `uparrow`, `upload`, `user`, `volumedown`, `volumeup`, `warning`, `wifi`
