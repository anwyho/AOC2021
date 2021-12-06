
// let globalFishCount = 0


// interface Fish {
//   id: number
//   timer: number
// }

// let currentDayFishes = []
// let nextDayFishes = []

// const createFish = (initialTimer: number) => {
//   const fishId = globalFishCount
//   globalFishCount += 1

//   const tick = (nextDayFishesQueue: Array<Fish>) => {
//     let timer = initialTimer
//     console.log(`fish ${fishId} tick ${timer} -> `)

//     if (timer == 0) {
//       nextDayFishesQueue.push(
//         <Fish> {id: fishId, timer: 6}
//       )
//     } else {
//       nextDayFishesQueue.push(
//         <Fish> {id: fishId, timer: }
//       )
//     }

//   }
//   return tick
// }

export const part1 = (inputs: Array<string>): string => {
  // return ''
  let fishes: number[] = inputs[0].split(',').map(v => parseInt(v))

  // fishes = [3,4,3,1,2]

  for (let i = 0; i < 80; i++) {
    const newFishes: number[] = []
    fishes = fishes.map((timer: number) => {
      let newTimer = timer - 1
      if (newTimer == -1) {
        newTimer = 6
        newFishes.push(8)
      }
      return newTimer
    })
    fishes = fishes.concat(newFishes)
  }

  return fishes.length.toString()
}

export const part2 = (inputs: Array<string>): string => {
  let fishes: number[] = inputs[0].split(',').map(v => parseInt(v))
  // fishes = [3,4,3,1,2]

  let fishByDays: Map<number, number> = new Map<number, number>()
  fishes.forEach(timer => fishByDays.set(timer, (fishByDays.get(timer) ?? 0) + 1))
  // console.log(fishByDays)

  for (let i = 0; i < 256; i++) {
    let newFishByDays: Map<number, number> = new Map<number, number>()
    const nextDayFishes = (fishByDays.get(0) ?? 0)
    newFishByDays.set(6, (fishByDays.get(6) ?? 0) + nextDayFishes)
    newFishByDays.set(8, nextDayFishes)


    for (let timer = 0; timer <= 8; timer++) {
      // const nextDayFishes = (fishByDays.get(timer+1) ?? 0)
      // newFishByDays.set(timer, nextDayFishes)
      if (timer == 0) {
        newFishByDays.set(6, (fishByDays.get(0) ?? 0))
        newFishByDays.set(8, (fishByDays.get(0) ?? 0))
      } else {
        // get day 6 and 8 fishes + old fishes
        newFishByDays.set(timer-1, (newFishByDays.get(timer-1) ?? 0) + (fishByDays.get(timer) ?? 0))
      }
      
    }


    fishByDays = newFishByDays

    const arr = []
    for (let timer = 0; timer <fishByDays.size; timer++) {
      arr.push(fishByDays.get(timer) ?? 0)
    }
    // console.log(`day ${i+1} ${arr}`)
  }


  let sum = 0
  for (let timer = 0; timer <= 8; timer ++) {
    sum += fishByDays.get(timer) ?? 0
  }

  return sum.toString()
}