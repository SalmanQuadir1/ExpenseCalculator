import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'
const Chart = (props) => {
    const datPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    let totalMaximum = Math.max(...datPointValues)
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />)}
        </div>
    )
}

export default Chart