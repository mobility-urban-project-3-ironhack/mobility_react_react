
import React from 'react';
import {
  callBackArrObj,
  parseMinutes,
  parseCoKgm,
  parseCalories,
  parseDistance,
  parsePrice
} from '../../services/MiscService'
import { MDBIcon, MDBCard, MDBCardBody, MDBCardImage,MDBCardText } from 'mdbreact';
import InputSelect from './InputSelect';
import { SearchContext } from '../../contexts/SearchStore';


class CardExample extends React.Component {

  state={
    minimize:false,
    selectType: 0

  }

  onHandleClick() {
    this.props.handleDataMapChange(this.props.data[this.state.selectType])
  }

  onHandleSelecType(e) {
    console.log(e.target.value)

    this.setState({selectType: e.target.value}, ()=> console.log(e.target.value + ' . ' + this.state.selectType))
  }

  render () {
  const { type, data, isFavorite } = this.props
  const datas = {
    cost: callBackArrObj(data, 'cost'),
    co: callBackArrObj(data, 'co2'),
    calories: callBackArrObj(data, 'totalCalories'),
    time: callBackArrObj(data, 'totalTime'),
    distance: callBackArrObj(data, 'totalDistance'),
  }
  return (
    <MDBCard 
      className="d-flex flex-row align-items-center text-left px-0 my-3 py-1 ">
      <MDBCardImage
        className="img-fluid"
        onClick={()=>console.log('clica' + this.props.dataMap)} 
        src={`https://dummyimage.com/32x32/dedbde/000000&text=${type}`}
      />
      {!this.state.minimize && (
        <MDBCardBody className="card-body">
          <MDBCardText  onClick={this.props.handleDataMapChange(this.props.data[this.state.selectType])} >
        {isFavorite && <span><MDBIcon icon="star" size="1x" className='yellow-text' />Recomendation</span>}
        Price: <strong>{parsePrice(datas.cost[0])}</strong>
            {datas.cost.length > 1 && (<strong> - {parsePrice(datas.cost[datas.cost.length - 1])}€ - </strong>)}
            Co2: {(<strong>{parseCoKgm(datas.co[0])}</strong>)}
            {datas.co.length > 1 && (<strong> - {parseCoKgm(datas.co[datas.co.length - 1])} - </strong>)}
            Calories: {<strong>{parseCalories(datas.calories[0])}</strong>}
            {datas.calories.length > 1 && (<strong> - {parseCalories(datas.calories[datas.calories.length - 1])} - </strong>)}
            Time: {<strong>{parseMinutes(datas.time[0])}</strong>}
            {datas.time.length > 1 && (<strong> - {parseMinutes(datas.time[datas.time.length - 1])} - </strong>)}
            Distance: {<strong>{parseDistance(datas.distance[0])}</strong>}
            {datas.distance.length > 1 && (<strong> - {parseDistance(datas.distance[datas.distance.length - 1])} - </strong>)}
         </MDBCardText>       
        <InputSelect handleSelectType={this.state.onHandleSelecType} />
      </MDBCardBody>
      )}
    </MDBCard>
  )
}}


const CardExampleWithSearchContext = searchProps => (
  <SearchContext.Consumer>
    {consumerProps => (<CardExample {...consumerProps} {...searchProps} />)}
  </SearchContext.Consumer>
)

export default CardExampleWithSearchContext;