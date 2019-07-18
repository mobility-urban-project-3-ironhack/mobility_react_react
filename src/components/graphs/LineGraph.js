import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
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
      data: [65, 59, 80, 81, 56, 55, 40],
  
    },
  ]
};

const legend = {
  display: true
}

const options = {
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
  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line data={data} legend={legend} options={options} />
      </div>
    );
  }
};

export default LineGraph



