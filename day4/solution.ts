
type BingoCard = number[]
type GameState = [BingoCard[], number, BingoCard?]

const parseCardsFromInputs = (inputs: Array<string>): BingoCard[] => 
  inputs.reduce(
    // TODO
    (cardsAcc: BingoCard[], line: string): BingoCard[] => { return cardsAcc },
    [] as BingoCard[]
  )
// TODO
const hasBingo = (card: BingoCard): boolean => false 

export const part1 = (inputs: Array<string>): string => 
  inputs[0].split(',').map(n => parseInt(n)).reduce(
    (state: GameState, currentNumber: number): GameState => { 
      //for each number 
      //  for each card
      //    -1 the number
      //  check for bingo
      //filter positive vals
      //flat and sum card, multiply with prevNum

      console.log(currentNumber)
      return state
    },
    [
      parseCardsFromInputs(inputs.slice(3)), 
      parseInt(inputs[0].split(',')[0]), 
      undefined
    ] as GameState
  ).toString()

export const part2 = (inputs: Array<string>): string => { return inputs[0] }
