# Wowser Math

[![Join Community](https://badgen.net/badge/discord/join%20community/blue)](https://discord.gg/DeVVKVg)
[![Version](https://badgen.net/npm/v/@wowserhq/math)](https://www.npmjs.org/package/@wowserhq/math)
[![MIT License](https://badgen.net/github/license/wowserhq/math)](LICENSE)
[![CI](https://github.com/wowserhq/math/workflows/CI/badge.svg)](https://github.com/wowserhq/math/actions?query=workflow%3ACI)
[![Test Coverage](https://codecov.io/gh/wowserhq/math/branch/master/graph/badge.svg)](https://codecov.io/gh/wowserhq/math)

A 3D math library for Wowser.

## Usage

To install Wowser Math:

```sh
npm install @wowserhq/math
```

To use Wowser Math in an ES2015 module environment:

```js
import { Matrix4 } from '@wowserhq/math';

const matrix = new Matrix4();

matrix.scaleByNumber(4.0);
```

## Documentation

Wowser Math ships a complete set of jsdoc documentation.

To build a local copy of the documentation, check out the repo and run:

```sh
npm run doc
```

A documentation directory will be created at the root level. The documentation can be viewed in a
web browser.

## Compatibility

Wowser Math should work with any browser that has native support for:

* ES2015 Classes
* Generators
* `const` and `let` scoping
* Typed Arrays

Currently, the browser support targets are the latest 2 major versions of Chrome, Firefox, Safari,
and Edge.

Additionally, Node 10+ is supported.
