# Stylish 🎀🎀🎀

CSS in JS helpers at your disposal.

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/M4M7W45W)

[![NPM version](https://img.shields.io/npm/v/@mariosant/stylish.svg)](https://www.npmjs.com/package/@mariosant/stylish)
[![CircleCI](https://circleci.com/gh/mariosant/stylish/tree/master.svg?style=svg)](https://circleci.com/gh/mariosant/stylish/tree/master)

## Installation

Add `@mariosant/stylish` to your `package.json`.

```bash
$ npm install @mariosant/stylish
```

You can now import the module and use it.

```javascript
import {unless} from '@mariosant/stylish';
```

## Usage

Stylish is a collection of helpers for your CSS in JS projects. Known to be compatible with styled-components and emotion. It aims to provide helpers and not to reimplement functionality found in other similar modules, like polished.

This being said, all exported functions are meant to be used within your styles. For example

```javascript
import {ifProp} from '@mariosant/stylish';

const Title = styled('h1')`
	color: ${ifProp('extra', 'black', 'grey')};
`;
```

### Reference

Please find the full api reference within the `docs` directory.

## Meta

Marios Antonoudiou – [@marios_ant](https://twitter.com/marios_ant) – mariosant@sent.com

Distributed under the MIT license. [https://github.com/mariosant/stylish](https://github.com/mariosant/stylish)

## Contributing

1. Fork it (<https://github.com/mariosant/stylish/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes using a semantic commit message.
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
