import http from './BaseService';

const getDataByYear = (data,num) => {
  const result = {
    calories:[],
    co2:[],
    price:[]
  }
  for (let i=0;i<12;i++) {
    const sum = data.reduce((acc,journey) => {
      let date = new Date(journey.createdAt)
      if (date.getMonth() === i) {
        acc.calories = acc.calories + journey.calories
        acc.co2 = acc.co2 + journey.co2
        acc.price = acc.price + journey.price
        return acc
      } else {
        return acc
      }
    },{calories: 0,
      co2:0,
      price:0
    })
    result.calories.push(sum.calories/num)
    result.co2.push(sum.co2/num)
    result.price.push(sum.price/num)
  }
    return result
}

const getDataByMonth = (data,num) => {
  const result = {
    calories:[],
    co2:[],
    price:[]
  }
  for (let i=1;i<32;i++) {
    const sum = data.reduce((acc,journey) => {
      let date = new Date(journey.createdAt)
      if (date.getMonth() === 6 && date.getDate() === i) {
        acc.calories = acc.calories + journey.calories
        acc.co2 = acc.co2 + journey.co2
        acc.price = acc.price + journey.price
        return acc
      } else {
        return acc
      }
    },{calories: 0,
      co2:0,
      price:0
    })
    result.calories.push(sum.calories/num)
    result.co2.push(sum.co2/num)
    result.price.push(sum.price/num)
  }
    return result
}


const list = () => http.get('/stats')
  .then(journeys =>{
    return {
      year: getDataByYear(journeys.data,1),
      month: getDataByMonth(journeys.data,1)
    }
  })
    
const listAll = () => http.get('/stats/all')
.then(journeys =>{
  return {
    year: getDataByYear(journeys.data,3),
    month: getDataByMonth(journeys.data,3)
  }
})

// el num habria que hacerlo dependiendo del numero de usuarios que tengamos



  export default {
    list,
    listAll
  }