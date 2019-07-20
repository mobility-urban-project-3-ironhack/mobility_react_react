
import React from 'react';
import { callBackArrObj } from '../../services/MiscService'
import { MDBIcon, MDBCard, MDBCardBody, MDBCardImage, MDBListGroup, MDBListGroupItem  } from 'mdbreact';


const CardExample = ({ type, data, isFavorite }) => {

  const dataCost = callBackArrObj(data, 'cost')
  const dataCO = callBackArrObj(data, 'co2')
  const dataCalories = callBackArrObj(data, 'totalCalories')
  const dataTime = callBackArrObj(data, 'totalTime')
  const dataDistance = callBackArrObj(data, 'totalDistance')

  return (
    <MDBCard className="d-flex flex-row align-items-center text-left px-1 mx-4 my-3 py-1 ">
      <MDBCardImage 
        className="img-fluid "
        src={`https://dummyimage.com/128x128/dedbde/000000&text=${type}`} />
        <MDBCardBody className="">
          {isFavorite && <p><MDBIcon icon="star" size="1x" className='yellow-text'/>Recomendation</p>}
        <MDBListGroup>
          <MDBListGroupItem>Price: {(dataCost.length <= 1) && (<strong>{parseFloat(dataCost).toFixed(2)}</strong>)}
                     {(dataCost.length >= 2) && (<strong>{parseFloat(dataCost[0]).toFixed(2)} - { parseFloat(dataCost[dataCost.length-1]).toFixed(2)}</strong>)}
                     {' '} Co2: {(dataCO.length <= 1) && (<strong>{parseFloat(dataCO).toFixed(2)}</strong>)}
                     {(dataCO.length >= 2) && (<strong>{parseFloat(dataCO[0]).toFixed(2)} - { parseFloat(dataCO[dataCO.length-1]).toFixed(2)}</strong>)}
          </MDBListGroupItem>
          <MDBListGroupItem>Calories: {(dataCalories.length <= 1) && (<strong>{parseFloat(dataCalories).toFixed(2)}</strong>)}
                     {(dataCalories.length >= 2) && (<strong>{parseFloat(dataCalories[0]).toFixed(2)} - { parseFloat(dataCalories[dataCalories.length-1]).toFixed(2)}</strong>)}
          </MDBListGroupItem>
          <MDBListGroupItem> Time: {(dataTime.length <= 1) && (<strong>{parseFloat(dataTime).toFixed(2)}</strong>)}
                     {(dataTime.length >= 2) && (<strong>{parseFloat(dataTime[0]).toFixed(2)} - { parseFloat(dataTime[dataTime.length-1]).toFixed(2)}</strong>)}
                     {' '} Distance: {(dataDistance.length <= 1) && (<strong>{parseFloat(dataDistance).toFixed(2)}</strong>)}
                     {(dataDistance.length >= 2) && (<strong>{parseFloat(dataDistance[0]).toFixed(2)} - { parseFloat(dataDistance[dataDistance.length-1]).toFixed(2)}</strong>)}
          </MDBListGroupItem>
        </MDBListGroup>
        </MDBCardBody>
    </MDBCard>
  )
}

export default CardExample;