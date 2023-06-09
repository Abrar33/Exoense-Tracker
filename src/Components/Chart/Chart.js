import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar';
export default function Chart(props) {
  const dataPointValue=props.dataPoints.map((dataPoint)=> dataPoint.value)
  const totalMax=Math.max(...dataPointValue);
    return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint)=>{return<ChartBar
        key={dataPoint.label} 
        value={dataPoint.value}
        maxValue={totalMax}
        label={dataPoint.label}
        />})
    }</div>
  )
}
