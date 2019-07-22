const callBackArrObj = (arr, element) => {
  let elementArray = []

  if (Object.keys(arr[0]).some(e => e === element)) {
    if (arr[0][element] === undefined || arr[0][element] === null) {
      arr[0][element] = 0
    }
    elementArray = [arr[0][element]]
  } else {
    Object.keys(arr[0]).forEach(e => {
      arr[0][e].forEach((ele) => {
        if (ele[element] === undefined || ele[element] === null) {
          ele[element] = 0
        }
        elementArray = [...elementArray, ele[element]]
      })
    })
  }

  return elementArray.sort((a,b)=>a-b)
}


const parseMinutes = time => parseInt(time/60/60)

const parseCoKgm = kgm => parseInt(kgm/1000)

const parseCalories = calories => parseInt(calories/1000)

const parseDistance = distance => (distance/1000).toFixed(2)

const parsePrice = price => parseFloat(price).toFixed(2)

export { 
  callBackArrObj,
  parseMinutes,
  parseCoKgm,
  parseCalories,
  parseDistance,
  parsePrice
}