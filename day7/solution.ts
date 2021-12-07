export const part1 = (inputs: Array<string>): string => { 

  let positions = inputs[0].split(',').map((v) => parseInt(v))
  // positions = [16,1,2,0,4,2,7,1,2,14]

  positions.sort((a: number, b: number) => a - b)
  // console.log(positions)

  const initFuel = positions.reduce((a, b) => a + b)
  let fuel = initFuel + positions.length
  let minFuel = Infinity

  const totalCrabs = positions.length
  let crabsBehind = 0
  let crabsHere = 0
  let crabsAhead = totalCrabs

  let positionsIx = 0
  // console.log('before')
  for (let i = 0; i < positions[positions.length-1]; i++) {
    // catch up positions
    while (positions[positionsIx] === i) {
      crabsHere += 1
      crabsAhead -= 1
      positionsIx += 1
    }

    // We've arrived on these crabs
    fuel -= crabsAhead 
    fuel -= crabsHere

    // console.log(i, fuel)
    minFuel = Math.min(minFuel, fuel)


    

    crabsBehind += crabsHere
    fuel += crabsBehind
    crabsHere = 0
  }
  // console.log('after')

  return minFuel.toString()
}

export const part2 = (inputs: Array<string>): string => { 
  let positions = inputs[0].split(',').map((v) => parseInt(v))
  // positions = [16,1,2,0,4,2,7,1,2,14]
  positions.sort((a, b) => a - b)

  const positionMap = new Map<number, number>()
  positions.forEach(position => positionMap.set(position, (positionMap.get(position) ?? 0) + 1))
  const positionsAndFreq: number[][] = []
  positionMap.forEach((value, key) => {
    positionsAndFreq.push([key, value])
  })
  positionsAndFreq.sort((a, b) => a[0] - b[0])
  console.log(positionsAndFreq)

  const [startToIxFuel, endToIxFuel] = [Array.from({length: positions[-1]}).fill(0), Array.from({length: positions[-1]}).fill(0)]


  // I gave up here
  const cache = new Map<number, number>()
  const cost = (n: number, i: number): number => {
    const distance = Math.abs(n-i)
    if (!cache.has(distance)) {
      // console.log("new")
      let sum = 0
      // console.log(distance)
      for (let i = 1; i <= distance; i++) {
        sum += i
      }
      // console.log(`set ${sum}`)
      cache.set(distance, sum)
    }
    return cache.get(distance) ?? Infinity
  }
  // console.log(cost(14, 5))
  // console.log(positions[0], positions[positions.length - 1])

  let minFuel = Infinity
  // still relies on sorted array
  for (let i = positions[0]; i <= positions[positions.length - 1]; i++) {
    const costs = []
    for (const pos of positions) {
    // console.log("in")
      costs.push(cost(pos, i))
    }
    // console.log(costs)
    const score = costs.reduce((a: number, b: number): number => a + b)
    if (score < minFuel) minFuel = score
  }
    
  return minFuel.toString()
  




  // positions.sort((a: number, b: number) => a - b)
  // console.log(positions)

  // const initFuel = positions.reduce((a, b, i) => a + b*i)
  // // let fuel = initFuel + positions.length
  // // let minFuel = Infinity

  // const totalCrabs = positions.length
  // let crabsBehind = 0
  // let crabsHere = 0
  // let crabsAhead = totalCrabs

  // let positionsIx = 0
  // console.log('before')
  // for (let actualIx = 0; actualIx < positions[positions.length-1]; actualIx++) {
  //   // catch up positions
  //   while (positions[positionsIx] === actualIx) {
  //     crabsHere += 1
  //     crabsAhead -= 1
  //     positionsIx += 1
  //   }

  //   // We've arrived on these crabs
  //   fuel -= crabsAhead 
  //   fuel -= crabsHere

  //   // console.log(i, fuel)
  //   minFuel = Math.min(minFuel, fuel)


    

  //   crabsBehind += crabsHere
  //   fuel += crabsBehind
  //   crabsHere = 0
  // }
  // console.log('after')

  // return minFuel.toString()
}
