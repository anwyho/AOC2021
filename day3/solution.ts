type GammaRateBuilder = string
type EpsilonRateBuilder = string
type Bit = '0' | '1'

// onesDeltas returns an array of numbers representing the delta of '1's to '0's. 
// E.g. if a value is 12, there were 12 more '1's at that index in all inputs; but if a value is 0, there were the same number of '1's and '0's at that index.
const onesDeltas = (inputs: Array<string>): Array<number> => 
  inputs.reduce(
    (acc: Array<number>, input: string): Array<number> => 
      acc.map((delta: number, i: number): number => 
        input[i] === '1' ? delta+1 : delta-1),
    new Array(inputs[0].length).fill(0)
  )

// defers to '1'
const mostCommonBit = (delta: number): Bit => delta >= 0 ? '1' : '0'

const part1Expansion = (inputs: Array<string>): string => 
  onesDeltas(inputs).reduce(
    (
      acc: [GammaRateBuilder, EpsilonRateBuilder], 
      onesDelta: number,
    ): [GammaRateBuilder, EpsilonRateBuilder] => 
      onesDelta > 0
        ? [acc[0]+'1', acc[1]+'0']
        : [acc[0]+'0', acc[1]+'1'],
    ['', ''] as [GammaRateBuilder, EpsilonRateBuilder]
  ).reduce(
    (erb: EpsilonRateBuilder, grb: GammaRateBuilder): string => 
      (parseInt(erb, 2) * parseInt(grb, 2)).toString()
  )

type O2Diagnostics = string
type CO2Diagnostics = string

const part2Expansion = (inputs: Array<string>): string => 
  inputs[0].split('').reduce(
    (
      filterAcc: [O2Diagnostics[], CO2Diagnostics[]],
      _bit: string, 
      bitIndex: number, 
    ): [O2Diagnostics[], CO2Diagnostics[]] => 
      [
        filterAcc[0].filter(
          (input: O2Diagnostics, _i: number, remain: O2Diagnostics[]): boolean => 
            filterAcc[0].length === 1 || 
              ((onesDeltas(remain)[bitIndex] >= 0 ? '1' : '0') === input[bitIndex])
        ),
        filterAcc[1].filter(
          (input: CO2Diagnostics, _i: number, remain: CO2Diagnostics[]): boolean => 
            filterAcc[1].length === 1 || 
              ((onesDeltas(remain)[bitIndex] >= 0 ? '1' : '0') !== input[bitIndex])
        ),
      ],
    [inputs, inputs] as [O2Diagnostics[], CO2Diagnostics[]]
  )
  .flat()
  .reduce(
    (co2: string, o2: string): string => 
      (parseInt(co2, 2) * parseInt(o2, 2)).toString()
  )

// @ts-ignore
export const part1 = ins => ins.reduce((acc, input) => acc.map((delta, i) => input[i] === '1' ? delta+1 : delta-1), new Array(ins[0].length).fill(0)).reduce((acc, delta) => delta > 0 ? [acc[0]+'1', acc[1]+'0'] : [acc[0]+'0', acc[1]+'1'], ['', '']).reduce((e, g) => (parseInt(e, 2) * parseInt(g, 2)).toString())

// @ts-ignore
export const part2 = (ins) => ins[0].split('').reduce((filterAcc, _bit, bitIndex) => [filterAcc[0].filter((input, _i, remain): boolean => filterAcc[0].length === 1 || (remain.reduce((acc, input) => acc.map((delta, i) => input[i] === '1' ? delta+1 : delta-1), new Array(remain[0].length).fill(0))[bitIndex] >= 0 ? '1' : '0') === input[bitIndex]), filterAcc[1].filter((input, _i, remain): boolean => filterAcc[1].length === 1 || (remain.reduce((acc, input) => acc.map((delta, i) => input[i] === '1' ? delta+1 : delta-1), new Array(remain[0].length).fill(0))[bitIndex] >= 0 ? '1' : '0') !== input[bitIndex])], [ins, ins]).flat().reduce((co2, o2) => (parseInt(co2, 2) * parseInt(o2, 2)).toString())
