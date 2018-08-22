
# get-random-excuse
[![package version](https://img.shields.io/npm/v/get-random-excuse.svg?style=flat-square)](https://npmjs.org/package/get-random-excuse)
[![package downloads](https://img.shields.io/npm/dm/get-random-excuse.svg?style=flat-square)](https://npmjs.org/package/get-random-excuse)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/get-random-excuse.svg?style=flat-square)](https://npmjs.org/package/get-random-excuse)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Get a random excuse. Based on [excuse-generator](https://github.com/slaith/excuse-generator)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install get-random-excuse
$ # OR
$ yarn add get-random-excuse
```

## Usage

```js
const getRandomExcuse = require('get-random-excuse')

console.log(getRandomExcuse()) // This sounds unbeleivable but Sherlock Holmes tried to seduce me
console.log(getRandomExcuse()) // You won't beleive this: Red Foreman set my house on fire
console.log(getRandomExcuse()) // This sounds crazy, but Godzilla stole my identity
console.log(getRandomExcuse({leads: "I'm working remotely today,"})) // I'm working remotely today, a frag grenade kidnapped my lizard

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    