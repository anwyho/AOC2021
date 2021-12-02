type Horizontal = number
type Depth = number
type Aim = number

export const part1 = (inputs: Array<string>): string => 
  inputs
    .reduce(
      (acc: [Depth, Horizontal], input: string): [Depth, Horizontal] => 
        'up' === input.split(' ')[0]
          ? [acc[0] - parseInt(input.split(' ')[1]), acc[1]]
          : ('down' === input.split(' ')[0]) 
            ? [acc[0] + parseInt(input.split(' ')[1]), acc[1]]
            : [acc[0], acc[1] + parseInt(input.split(' ')[1])],
      [0, 0]
    )

    .reduce((depth: Depth, horizontal: Horizontal): number => depth*horizontal)
    .toString()

export const part2 = (inputs: Array<string>): string => 
  inputs
    .reduce(
      (acc: [Depth, Horizontal, Aim], input: string): [Depth, Horizontal, Aim] => 
        'up' === input.split(' ')[0]
          // increases aim by X units
          ? [acc[0], acc[1], acc[2] + parseInt(input.split(' ')[1])] 
          : ('down' === input.split(' ')[0]) 
            // decreases aim by X units 
            ? [acc[0], acc[1], acc[2] - parseInt(input.split(' ')[1])] 
            : [
              // increases depth by aim multiplied by X
              acc[0] - parseInt(input.split(' ')[1]), 
              // increases horizontal position by X units
              acc[1] + acc[2]*parseInt(input.split(' ')[1]), 
              acc[2]
            ],
      [0, 0, 0]
    )
    .slice(0,2)
    .reduce((depth: Depth, horizontal: Horizontal): number => depth*horizontal)
    .toString()