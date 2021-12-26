//   0:      1:      2:      3:      4:
//  AAAA    ....    AAAA    AAAA    ....
// B    C  .    C  .    C  .    C  B    C
// B    C  .    C  .    C  .    C  B    C
//  ....    ....    DDDD    DDDD    DDDD
// E    F  .    F  E    .  .    F  .    F
// E    F  .    F  E    .  .    F  .    F
//  GGGG    ....    GGGG    GGGG    ....
//
//   5:      6:      7:      8:      9:
//  AAAA    AAAA    AAAA    AAAA    AAAA
// B    .  B    .  .    C  B    C  B    C
// B    .  B    .  .    C  B    C  B    C
//  DDDD    DDDD    ....    DDDD    DDDD
// .    F  E    F  .    F  E    F  .    F
// .    F  E    F  .    F  E    F  .    F
//  GGGG    GGGG    ....    GGGG    GGGG

type Segment = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
type TempSegment = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g'
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

const digitsToSegments: Map<Digit,Segment[]> = new Map<Digit,Segment[]>([
  // Unique
  [1, [          'C',           'F'     ]],
  [4, [     'B', 'C', 'D',      'F'     ]],
  [7, ['A',      'C',           'F'     ]],
  [8, ['A', 'B', 'C', 'D', 'E', 'F', 'G']],

  // 5 Segments
  [2, ['A',      'C', 'D', 'E',      'G']],
  [3, ['A',      'C', 'D',      'F', 'G']],
  [5, ['A', 'B',      'D',      'F', 'G']],

  // 6 Segments
  [0, ['A', 'B', 'C',      'E', 'F', 'G']],
  [6, ['A', 'B',      'D', 'E', 'F', 'G']],
  [9, ['A', 'B', 'C', 'D',      'F', 'G']],

  [0, ['A', 'B', 'C',      'E', 'F', 'G']],
  [1, [          'C',           'F'     ]],
  [2, ['A',      'C', 'D', 'E',      'G']],
  [3, ['A',      'C', 'D',      'F', 'G']],
  [4, [     'B', 'C', 'D',      'F'     ]],
  [5, ['A', 'B',      'D',      'F', 'G']],
  [6, ['A', 'B',      'D', 'E', 'F', 'G']],
  [7, ['A',      'C',           'F'     ]],
  [8, ['A', 'B', 'C', 'D', 'E', 'F', 'G']],
  [9, ['A', 'B', 'C', 'D',      'F', 'G']],
])

const numSegmentsToDigits: Map<number,Digit[]> = new Map<number,Digit[]>([
  [2, [1]],
  [3, [7]],
  [4, [4]],
  [5, [2, 3, 5]],
  [6, [0, 6, 9]],
  [7, [8]],
])

const decodeMapping = (inputVals: string[]): Map<number, Set<Segment>> => {
  const segmentsToPossibleTempSegments = new Map<Segment, Set<TempSegment>>()
  inputVals.forEach((val: string) => {
    console.log('start')
    console.log(val)
    const valTempSegments: Set<TempSegment> = new Set<TempSegment>(val.split('') as TempSegment[])
    numSegmentsToDigits.get(val.length)?.forEach((digit: Digit) => {
      console.log(digit)
      digitsToSegments.get(digit)?.forEach((segment: Segment) => {
        const possibleTempSegments = segmentsToPossibleTempSegments.get(segment) ??
          new Set<TempSegment>('abcdefg'.split('') as TempSegment[])
        console.log(possibleTempSegments)
        segmentsToPossibleTempSegments.set(
          segment,
          intersection(valTempSegments, possibleTempSegments)
        )
      })
    })
    console.log('end')
  })
  console.log(segmentsToPossibleTempSegments)
  return new Map<number, Set<Segment>>()
}

const intersection = <T>(setA: Set<T>, setB: Set<T>): Set<T> => {
  let _intersection = new Set<T>()
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem)
    }
  }
  return _intersection
}

export const part1Expansion = (inputs: Array<string>): string =>
  inputs
    .flatMap(line => line.split('|')[1].split(' '))
    .filter(val => [2, 3, 4, 7].includes(val.length))
    .length
    .toString()

export const part2 = (inputs: Array<string>): string => {
  inputs = ["acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf"]
  // return '' // inputs[0]
  return inputs.map(
    (line: string): string[][] => {
      const [inputVals, outputVals] = line.split('|').map(
        (part: string): string[] => part.split(' ').filter(digit => digit.length !== 0)
      )
      console.log(inputVals, outputVals)
      const mapping = decodeMapping(inputVals)
      return []
    }
  )
  .length
  .toString()
  //   .map(line => inferMapping(line.split('|'))
}

// @ts-ignore
export const part1 = ins => ins.flatMap(line => line.split('|')[1].split(' ')).filter(val => [2, 3, 4, 7].includes(val.length)).length.toString()