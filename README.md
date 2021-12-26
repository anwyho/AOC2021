# ❄️ Advent of Code 2021

![Days completed](https://img.shields.io/badge/days%20completed-7-green)
![Stars count](https://img.shields.io/badge/stars%20⭐-15-yellow)

Merry Scriptsmas!

My goal this year is to solve each puzzle with only implicit return statements. That means everything will be pure functions! It's a pretty obnoxious goal, but so far, I've learned a lot about `map`ing and `reduce`ing. It's also interesting to see patterns cropping up, such as using `reduce` to modify specific values within an array, or using arrays to manipulate multiple variables simultaneously.

update: As of Day 5, the one-liners are over :cry:

## One Liners

### Day 1

```ts
ins => ins.filter((_v, i, arr) => i >= 1 && parseInt(arr[i-1]) < parseInt(arr[i])).length.toString() 
```
```ts
ins => ins.filter((_v, i, arr) => i >= 3 && arr.slice(i-3,i).reduce((acc, s) => acc + parseInt(s), 0) < arr.slice(i-2,i+1).reduce((acc, s) => acc + parseInt(s), 0)).length.toString()
```

### Day 2

```ts
ins => ins.reduce((acc, input) => input.split(' ')[0] === 'up' ? [acc[0], acc[1] - parseInt(input.split(' ')[1])] : input.split(' ')[0] === 'down' ? [acc[0], acc[1] + parseInt(input.split(' ')[1])] : [acc[0] + parseInt(input.split(' ')[1]), acc[1]], [0, 0]).reduce((h, d) => h * d).toString()
```
```ts
ins => ins.reduce((acc, input) => input.split(' ')[0] === 'up' ? [acc[0], acc[1], acc[2]+parseInt(input.split(' ')[1])] : input.split(' ')[0] === 'down' ? [acc[0], acc[1], acc[2]-parseInt(input.split(' ')[1])] : [acc[0]-parseInt(input.split(' ')[1]), acc[1]+acc[2]*parseInt(input.split(' ')[1]), acc[2]], [0, 0, 0]).slice(0,2).reduce((depth, horizontal) => depth*horizontal).toString()
```

### Day 3

```ts
ins => ins.reduce((acc, input) => acc.map((delta, i) => input[i] === '1' ? delta+1 : delta-1), new Array(ins[0].length).fill(0)).reduce((acc, delta) => delta > 0 ? [acc[0]+'1', acc[1]+'0'] : [acc[0]+'0', acc[1]+'1'], ['', '']).reduce((e, g) => (parseInt(e, 2) * parseInt(g, 2)).toString())
```
```ts
ins => ins[0].split('').reduce((filterAcc, _bit, bitIndex) => [filterAcc[0].filter((input, _i, remain) => filterAcc[0].length === 1 || (remain.reduce((acc, input) => acc.map((delta, i) => input[i] === '1' ? delta+1 : delta-1), new Array(remain[0].length).fill(0))[bitIndex] >= 0 ? '1' : '0') === input[bitIndex]), filterAcc[1].filter((input, _i, remain) => filterAcc[1].length === 1 || (remain.reduce((acc, input) => acc.map((delta, i) => input[i] === '1' ? delta+1 : delta-1), new Array(remain[0].length).fill(0))[bitIndex] >= 0 ? '1' : '0') !== input[bitIndex])], [ins, ins]).flat().reduce((co2, o2) => (parseInt(co2, 2) * parseInt(o2, 2)).toString())
```

### Day 4

```ts
ins => ins[0].split(',').map(n => parseInt(n)).reduce(([cards, prevNumber, winningCardValue], currentNumber) => winningCardValue !== -1 ? [cards, prevNumber, winningCardValue] : cards.map(card => card.map(space => space === currentNumber ? -1 : space)).reduce((acc, card, _i, cards) => [cards, currentNumber, Array.from({length: Math.sqrt(card.length)}, (_val, sideIndex) => card.slice(sideIndex*Math.sqrt(card.length), sideIndex*Math.sqrt(card.length)+Math.sqrt(card.length)).every(space => space === -1) || card.filter((_val, cardIndex) => cardIndex % Math.sqrt(card.length) === sideIndex).every(space => space === -1)).some(isBingo => isBingo) ? card.filter(space => space != -1).reduce((sum, space) => sum + space) : acc[2]], [cards, currentNumber, winningCardValue]), [ins.slice(2).reduce(([cardsAcc, cardIndex], line) => line === '' ? [cardsAcc.concat([[]]), cardIndex + 1] : [[...cardsAcc.slice(0, cardIndex), cardsAcc[cardIndex].concat(line.trim().split(/\s+/).map(s => parseInt(s))), ...cardsAcc.slice(cardIndex+1)], cardIndex], [[[]], 0])[0], -1, -1,]).slice(1).reduce((winningNumber, winningCardValue) => winningNumber * winningCardValue).toString()
```

```ts
ins => ins[0].split(',').map(n => parseInt(n)).reduce(([cards, prevNumber, winningCardValue], currentNumber) => cards.length === 0 ? [cards, prevNumber, winningCardValue] : cards.map(card => card.map(space => space === currentNumber ? -1 : space)).reduce((acc, card, i, filledCards) => [filledCards, ...(Array.from({length: Math.sqrt(card.length)}, (_val, sideIndex) => card.slice(sideIndex*Math.sqrt(card.length), sideIndex*Math.sqrt(card.length)+Math.sqrt(card.length)).every(space => space === -1) || card.filter((_val, cardIndex) => cardIndex % Math.sqrt(card.length) === sideIndex).every((space) => space === -1)).some(isBingo => isBingo) ? [currentNumber, card.filter(space => space != -1).reduce((sum, space) => sum + space)] : [acc[1], acc[2]])], [[], currentNumber, winningCardValue]).map((val, i) => i === 0 ? val.filter(card => !hasBingo(card)) : val), [ins.slice(2).reduce(([cardsAcc, cardIndex], line) => line === '' ? [cardsAcc.concat([[]]), cardIndex + 1] : [[...cardsAcc.slice(0, cardIndex), cardsAcc[cardIndex].concat(line.trim().split(/\s+/).map(s => parseInt(s))), ...cardsAcc.slice(cardIndex+1)], cardIndex], [[[]], 0])[0], -1, -1]).slice(1).reduce((winningNumber, winningCardValue) => winningNumber * winningCardValue).toString()
```

### Day 8

```ts
ins => ins.flatMap(line => line.split('|')[1].split(' ')).filter(val => [2, 3, 4, 7].includes(val.length)).length.toString()
```