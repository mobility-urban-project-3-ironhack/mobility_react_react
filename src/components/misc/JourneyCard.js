
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

const unit = [{name:'cost',unit:'euros', div:1}, {name:'co2',unit:'gr/Km',div:1}, {name:"totalCalories",unit:'calories',div:1},{name:"totalTime",unit:'mins',div:60} ,{name:"TotalDistance",unit:'km',div:1000} ]


class CardExample extends React.Component {

  state = {
    minimize: false,
    selectType: 0

  }

  componentDidMount() {
    this.setState({ data: this.props.data }, () => console.log(this.state.data))
  }



  onHandleClick = (e) => {
    e.target.value !== undefined
      ? this.props.handleDataMapChange([this.props.data[e.target.value]])
      : this.props.handleDataMapChange([this.props.data[0]])
  }


  render() {
    const { type, data, isFavorite } = this.props
    const datas = {
      cost: callBackArrObj(data, 'cost'),
      co2: callBackArrObj(data, 'co2'),
      totalCalories: callBackArrObj(data, 'totalCalories'),
      totalTime: callBackArrObj(data, 'totalTime'),
      TotalDistance: callBackArrObj(data, 'totalDistance'),
    }
    const arrData = ['cost', 'co2', "totalCalories", "totalTime", "TotalDistance"]
    const arrData2 = ['cost', 'co2', "calories", "time", "distance"]
    console.log(JSON.stringify(datas))
    
    return (
      <MDBCard onClick={this.onHandleClick}
        className="d-flex flex-row align-items-center text-left px-1 my-3 py-1 mx-2">
              {isFavorite && <MDBIcon icon="star" size="2x" className='yellow-text starRecomendation imgr'/>}  
      <MDBCardImage
          className='ml-1'
          style={{
            width: '40px',

          }}
          src={`/images/${type}.png`}
        />
        {!this.state.minimize && (
          <MDBCardBody className="card-body w-75">
            <div className= "text-center d-flex ">
                {arrData.map((type, i) => {
                  console.log(type)
                  let ico=''
                  let colorIco = ''
                  switch(type){
                    case 'cost':
                      ico='euro-sign'
                      colorIco='grey-text'
                      break;
                    case 'co2':
                        ico='atom'
                        colorIco='grey-text'
                        break;
                    case 'totalCalories':
                        ico='file'
                        colorIco='grey-text'
                        break;
                    case 'totalTime':
                        ico='clock'
                        colorIco='grey-text'
                        break;
                    case 'TotalDistance':
                        ico='route'
                        colorIco='grey-text'
                        break;
                    default:
                      break;
                  }

                  return (
                    <figure key={i}
                      className="figure my-n3"
                      style={{ width: '100%'} }
                    >
                      <MDBIcon 
                        icon={ico}
                        size="1x" className={colorIco}/>
                        <figcaption className='p-1'> 
                          {`${Math.round((datas[type][0]/(unit.filter(a => a.name === type)[0].div))*100)/100} ${unit.filter(a => a.name === type)[0].unit}`}
                          {datas[type].length>1 && (` - ${datas[type][datas[type].length-1]}`)}
                        </figcaption>
                    </figure>
                  )
                })}
              </div>
            <MDBCardText>
            
         </MDBCardText>
            {datas.length > 1 && <InputSelect />}
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