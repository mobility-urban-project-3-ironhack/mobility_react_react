
import React from 'react';
import {
  callBackArrObj,
  parseMinutes,
  parseCoKgm,
  parseCalories,
  parseDistance,
  parsePrice
} from '../../services/MiscService'
import { MDBIcon, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBContainer } from 'mdbreact';
import InputSelect from './InputSelect';
import { SearchContext } from '../../contexts/SearchStore';


class CardExample extends React.Component {

  state = {
    minimize: false,
    selectType: 0

  }

  componentDidMount() {
    this.setState({ data: this.props.data }, () => console.log(this.state.data))
  }


  // VAMOS POR AQUI! HAY QUE MANDAR LAS COORDENADAS A DATAMAP












  onHandleClick = (e) => {
    e.target.value !== undefined
      ? this.props.handleDataMapChange([this.props.data[e.target.value]])
      : this.props.handleDataMapChange([this.props.data[0]])
  }


  render() {
    const { type, data, isFavorite } = this.props
    const datas = {
      cost: callBackArrObj(data, 'cost'),
      co: callBackArrObj(data, 'co2'),
      calories: callBackArrObj(data, 'totalCalories'),
      time: callBackArrObj(data, 'totalTime'),
      distance: callBackArrObj(data, 'totalDistance'),
    }
    const arrData = ['cost', 'co2', "totalCalories", "totalTime", "TotalDistance"]

    
    return (
      <MDBCard onClick={this.onHandleClick}
        className="d-flex flex-row align-items-center text-left px-1 my-3 py-1 mx-2">
              {isFavorite && <MDBIcon icon="star" size="2x" className='yellow-text starRecomendation imgr'/>}  
      <MDBCardImage
          className='ml-3'
          style={{
            width: '32px',

          }}
          src={`/images/${type}.png`}
        />
        {!this.state.minimize && (
          <MDBCardBody className="card-body w-75">
            <div className= "text-center d-flex ">
                {arrData.map((type, i) => {
                  let ico=''
                  let colorIco = ''
                  switch(type){
                    case 'cost':
                      ico='euro-sign'
                      colorIco='green-text'
                      break;
                    case 'co2':
                        ico='atom'
                        colorIco='brown-text'
                        break;
                    case 'totalCalories':
                        ico='file'
                        colorIco='orange-text'
                        break;
                    case 'totalTime':
                        ico='clock'
                        colorIco='black-text'
                        break;
                    case 'totalDistance':
                        ico='route'
                        colorIco='grey-text'
                        break;
                    default:
                      break;
                  }

                  return (
                    <figure key={i}
                      className="figure p-2 my-n3"
                      style={{ width: '100%'} }
                    >
                      <MDBIcon 
                        icon={ico}
                        size="2x" className={colorIco}/>
                    {/*   <figcaption> {parseMinutes(datas[type][0])}
                        {datas[type].length > 1 && ( - {parseMinutes(data[type][datas[type].length - 1]})
                      </figcaption> */}
                    </figure>
  
                  )
                })}
              </div>
            <MDBCardText>
            
              {/*
              Price: <strong>{parsePrice(datas.cost[0])}</strong>
              <button type="button" class="btn btn-lg btn-danger"
                data-toggle="popover"
                title="Popover title"
                data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>

              {datas.cost.length > 1 && (<strong> - {parsePrice(datas.cost[datas.cost.length - 1])}€ - </strong>)}
              Co2: {(<strong>{parseCoKgm(datas.co[0])}</strong>)}
              {datas.co.length > 1 && (<strong> - {parseCoKgm(datas.co[datas.co.length - 1])} - </strong>)}
              Calories: {<strong>{parseCalories(datas.calories[0])}</strong>}
              {datas.calories.length > 1 && (<strong> - {parseCalories(datas.calories[datas.calories.length - 1])} - </strong>)}
              Time: {<strong>{parseMinutes(datas.time[0])}</strong>}
              {datas.time.length > 1 && (<strong> - {parseMinutes(datas.time[datas.time.length - 1])} - </strong>)}
              Distance: {<strong>{parseDistance(datas.distance[0])}</strong>}
              {datas.distance.length > 1 && (<strong> - {parseDistance(datas.distance[datas.distance.length - 1])} - </strong>)} */}
         </MDBCardText>
            {data.length > 1 && <InputSelect />}
          </MDBCardBody>
        )}
      </MDBCard>
    )
  }
}


const CardExampleWithSearchContext = searchProps => (
  <SearchContext.Consumer>
    {consumerProps => (<CardExample {...consumerProps} {...searchProps} />)}
  </SearchContext.Consumer>
)

export default CardExampleWithSearchContext;