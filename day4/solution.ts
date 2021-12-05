// @ts-ignore
export const part1 = ins => ins[0].split(',').map(n => parseInt(n)).reduce(([cards, prevNumber, winningCardValue], currentNumber) => winningCardValue !== -1 ? [cards, prevNumber, winningCardValue] : cards.map(card => card.map(space => space === currentNumber ? -1 : space)).reduce((acc, card, _i, cards) => [cards, currentNumber, Array.from({length: Math.sqrt(card.length)}, (_val, sideIndex) => card.slice(sideIndex*Math.sqrt(card.length), sideIndex*Math.sqrt(card.length)+Math.sqrt(card.length)).every(space => space === -1) || card.filter((_val, cardIndex) => cardIndex % Math.sqrt(card.length) === sideIndex).every(space => space === -1)).some(isBingo => isBingo) ? card.filter(space => space != -1).reduce((sum, space) => sum + space) : acc[2]], [cards, currentNumber, winningCardValue]), [ins.slice(2).reduce(([cardsAcc, cardIndex], line) => line === '' ? [cardsAcc.concat([[]]), cardIndex + 1] : [[...cardsAcc.slice(0, cardIndex), cardsAcc[cardIndex].concat(line.trim().split(/\s+/).map(s => parseInt(s))), ...cardsAcc.slice(cardIndex+1)], cardIndex], [[[]], 0])[0], -1, -1,]).slice(1).reduce((winningNumber, winningCardValue) => winningNumber * winningCardValue).toString()

// @ts-ignore
export const part2 = ins => ins[0].split(',').map(n => parseInt(n)).reduce(([cards, prevNumber, winningCardValue], currentNumber) => cards.length === 0 ? [cards, prevNumber, winningCardValue] : cards.map(card => card.map(space => space === currentNumber ? -1 : space)).reduce((acc, card, i, filledCards) => [filledCards, ...(Array.from({length: Math.sqrt(card.length)}, (_val, sideIndex) => card.slice(sideIndex*Math.sqrt(card.length), sideIndex*Math.sqrt(card.length)+Math.sqrt(card.length)).every(space => space === -1) || card.filter((_val, cardIndex) => cardIndex % Math.sqrt(card.length) === sideIndex).every((space) => space === -1)).some(isBingo => isBingo) ? [currentNumber, card.filter(space => space != -1).reduce((sum, space) => sum + space)] : [acc[1], acc[2]])], [[], currentNumber, winningCardValue]).map((val, i) => i === 0 ? val.filter(card => !hasBingo(card)) : val), [ins.slice(2).reduce(([cardsAcc, cardIndex], line) => line === '' ? [cardsAcc.concat([[]]), cardIndex + 1] : [[...cardsAcc.slice(0, cardIndex), cardsAcc[cardIndex].concat(line.trim().split(/\s+/).map(s => parseInt(s))), ...cardsAcc.slice(cardIndex+1)], cardIndex], [[[]], 0])[0], -1, -1]).slice(1).reduce((winningNumber, winningCardValue) => winningNumber * winningCardValue).toString()

type Space = number
type BingoCard = Space[]
// GameState represents all cards, the previous number, and the value of a winning bingo card if one exists.
type GameState = [BingoCard[], number, number]

const MARKED_SPACE: Space = -1
const CARD_WIDTH = 5

// parseCardsFromInputs expects an input as shown below and returns an array of arrays representing BingoCards. 
// 3 15  0  2 22
// 9 18 13 17  5
// 19  8  7 25 23
// 20 11 10 24  4
// 14 21 16 12  6
//
// 14 21 17 24  4
// 10 16 15  9 19
// 18  8 23 26 20
// 22 11 13  6  5
// 2  0 12  3  7 
const parseCardsFromInputs = (inputs: Array<string>): BingoCard[] => 
  inputs.reduce(
    ([cardsAcc, cardIndex]: [BingoCard[], number], line: string): [BingoCard[], number] => 
      line === ''
        ? [cardsAcc.concat([[]]), cardIndex + 1]
        : [
            [
              ...cardsAcc.slice(0, cardIndex),
              cardsAcc[cardIndex].concat(line.trim().split(/\s+/).map(s => parseInt(s))) as Space[],
              ...cardsAcc.slice(cardIndex+1),
            ], 
            cardIndex
          ],
    [[[]], 0] as [BingoCard[], number]
  )[0]

// hasBingo returns true when a card has a row or column of marked spaces.
// It's pretty inefficient and only fails-fast at most once for a newly bingo'd card.
const hasBingo = (card: BingoCard): boolean => 
  Array.from(
    {length: CARD_WIDTH}, 
    (_val, sideIndex) => 
      // check rows
      card.slice(sideIndex*CARD_WIDTH, sideIndex*CARD_WIDTH+CARD_WIDTH)
        .every((space: Space): boolean => space === MARKED_SPACE) || 
      // check columns
      card.filter((_val: Space, cardIndex: number): boolean => cardIndex % CARD_WIDTH === sideIndex)
        .every((space: Space): boolean => space === MARKED_SPACE)
  ).some(isBingo => isBingo)

export const part1Expansion = (inputs: Array<string>): string => 
  (inputs[0].split(',').map(n => parseInt(n)).reduce(
    ([cards, prevNumber, winningCardValue]: GameState, currentNumber: number): GameState => 
      winningCardValue !== -1
        ? [cards, prevNumber, winningCardValue] as GameState
        : cards.map(
            (card: BingoCard): BingoCard => card.map((space: Space): Space => space === currentNumber ? -1 : space)
          ).reduce(
            (acc: GameState, card: BingoCard, _i: number, cards: BingoCard[]): GameState =>
              [
                cards, 
                currentNumber, 
                hasBingo(card) 
                  ? card.filter(space => space != MARKED_SPACE).reduce((sum, space) => sum + space)
                  : acc[2]
              ] as GameState, 
            [cards, currentNumber, winningCardValue]
          ),
    [
      parseCardsFromInputs(inputs.slice(2)),
      -1,
      -1,
    ] as GameState
  ).slice(1) as [number, number])
  .reduce((winningNumber: number, winningCardValue: number): number => winningNumber * winningCardValue)
  .toString()

export const part2Expansion = (inputs: Array<string>): string => 
  (inputs[0].split(',').map(n => parseInt(n)).reduce(
    ([cards, prevNumber, winningCardValue]: GameState, currentNumber: number): GameState => 
      cards.length === 0
        ? [cards, prevNumber, winningCardValue] as GameState
        : (cards.map(
            (card: BingoCard): BingoCard => card.map((space: Space): Space => space === currentNumber ? -1 : space)
          ).reduce(
            (acc: GameState, card: BingoCard, i: number, filledCards: BingoCard[]): GameState =>
              [
                filledCards, 
                ...(
                  hasBingo(card) 
                    ? [currentNumber, card.filter(space => space != MARKED_SPACE).reduce((sum, space) => sum + space)]
                    : [acc[1], acc[2]]
                )
              ] as GameState, 
            [[], currentNumber, winningCardValue]
          ).map((val, i) =>
            i === 0
              ? (val as BingoCard[]).filter(card => !hasBingo(card)) 
              : val
          ) as GameState),
    [
      parseCardsFromInputs(inputs.slice(2)),
      -1,
      -1,
    ] as GameState
  ).slice(1) as [number, number])
  .reduce((winningNumber: number, winningCardValue: number): number => winningNumber * winningCardValue)
  .toString()
