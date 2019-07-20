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

export { callBackArrObj }