import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

const legend = {
  display: true,
  position: 'bottom',
  labels : {
    boxWidth: 10,
  },
  reverse: true
}

const options = {
  responsive:true,
  scales: {
    xAxes: [{
      time: {
        unit: 'month'
      },
      ticks: {
        maxTicksLimit: 12,
        display: true
      },
      gridLines: {
        display: false,
        drawBorder: false,           
        lineWidth: 2,
        color: 'dark-gray'
      },
      display: true
    }],
    yAxes: [{
      display: false,
    }],
  },
}

class LineGraph extends Component {
  state = {
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [
        {
          label: 'Me',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40,45,60,70,36,40],
        },
        {
          label: 'MU People',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(45,115,115,0.4)',
          borderColor: 'rgba(45,115,115,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(45,115,115,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(45,115,115,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [40, 50,65,34,56,40,31,24,46,56,30,45],
        }
      ]
    }
  }
  render() {
    return (
      <MDBContainer className='mt-3'>
        <h5 className='mb-3'>Line Example</h5>
 
        <div className="btn-group mb-3 mt-3" role="group">
          <button
            className="btn btn-light btn-sm"
            onClick={() => {}}>Last Month
          </button>
          <button
            className="btn btn-light btn-sm"
            onClick={() => {}}> Last Years
          </button>
        </div>
        <Line data={this.state.data} legend={legend} options={options} />
      </MDBContainer>
    );
  }
};

export default LineGraph



