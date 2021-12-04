
type GammaRateBuilder = string
type EpsilonRateBuilder = string

export const part1 = (inputs: Array<string>): string => 
  inputs.reduce(
    (acc: Array<number>, input: string): Array<number> => 
      acc.map(
        (onesFreq: number, i: number) => input[i] === '1' ? onesFreq+1 : onesFreq
      ),
    new Array(inputs[0].length).fill(0)
  // ).map(v => { console.log(v); return v }
  ).reduce(
    (
      acc: [GammaRateBuilder, EpsilonRateBuilder], 
      onesFreq: number, 
      _i: number, 
      array: Array<number>,
    ): [GammaRateBuilder, EpsilonRateBuilder] => 
      onesFreq > (inputs.length / 2)
        ? [acc[0]+'1', acc[1]+'0']
        : [acc[0]+'0', acc[1]+'1'],
    ['', ''] as [GammaRateBuilder, EpsilonRateBuilder]
  // ).map(v => { console.log(v); return v }
  ).reduce(
    (erb: EpsilonRateBuilder, grb: GammaRateBuilder): string => (parseInt(erb, 2)*parseInt(grb, 2)).toString()
  )

export const part2 = (inputs: Array<string>): string => { return inputs[0] }