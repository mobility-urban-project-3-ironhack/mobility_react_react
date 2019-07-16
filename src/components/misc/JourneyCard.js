
import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle  } from 'mdbreact';

const CardExample = ({ type, data, journeyDrawingMap }) => {
  return (
    <MDBCard className="d-flex flex-row align-items-center px-5 mx-4 my-3 ">
      <MDBCardImage className="img-fluid " src="data:image/png;base64,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" />
      <MDBCardBody className="">
        <MDBCardTitle>{type.toUpperCase()}</MDBCardTitle>
        <MDBCardBody className='d-flex row align-items-center'>
          <div className='flex-fill'>
            <p><strong>Distance:</strong> {data.totalDistance} meters --<strong> Time:</strong> {data.totalTime} minutes</p>
            <p><strong>Calories:</strong> {data.totalCalories} calories --<strong> CO2 comsumer: </strong> {data.co2} kg/m2</p>
            <p><strong>Price:</strong> {data.cost !== null ? data.cost : '0'} €</p>
          </div>
          {data.wayPoints.length > 0 &&
            <div className='flex-fill'>
              <ul className='list-group'>
                {data.wayPoints.map((waypoint, i) => (
                  <li key={i} className="list-group-item">
                    <strong>
                      {(waypoint.transitMode.toLowerCase()).charAt(0).toUpperCase() + (waypoint.transitMode.toLowerCase()).slice(1)}
                    </strong> for {waypoint.distance} meters, it will take {(waypoint.time / 60).toFixed(0)} minutes
                </li>
                ))}
              </ul>
            </div>}
        </MDBCardBody>
        <MDBBtn  onClick={journeyDrawingMap}>Request</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  )
}

export default CardExample;