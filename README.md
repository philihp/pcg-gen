[![Version](https://img.shields.io/npm/v/pcg-gen)](https://www.npmjs.com/package/pcg-gen)
[![Requirements Status](https://requires.io/github/philihp/fast-shuffle/requirements.svg?branch=main)](https://requires.io/github/philihp/fast-shuffle/requirements/?branch=main)
![Tests](https://github.com/philihp/pcg-gen/workflows/tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/philihp/pcg-gen/badge.svg?branch=main)](https://coveralls.io/github/philihp/pcg-gen?branch=main)
![Downloads](https://img.shields.io/npm/dt/pcg-gen)
![License](https://img.shields.io/npm/l/pcg-gen)

# Permuted Congruential Generator Generator

A permuted congruential generator (PCG) is a pseudorandom number generation algorithm developed in 2014 which applies an output permutation function to improve the statistical properties of a modulo-2^n linear congruential generator. It achieves excellent statistical performance with small and fast code, and small state size.

This implementation uses a Javascript generator function, [because we can](https://jrsinclair.com/articles/2022/why-would-anyone-need-javascript-generator-functions/), and it also justifies the redundant package name.

[There are reasons why this might be better.](https://www.pcg-random.org/index.html)

## Install

```bash
npm install --save pcg-gen
```

## Usage

```js
import { pcggen } from 'pcg-gen'

const rand = pcggen(42n)
const { value: r1 } = randomizer.next()
// r1 <- 1292176121501498n
const { value: r2 } = randomizer.next()
// r2 <- 11541586741780280317n
```

Because `pcggen` returns an [`iterable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), you can use it in a `for...of` loop if that's your kink.

```js
for(const n of rand) {
  console.log(n)
  if(n > 1000000) break;
}
```
