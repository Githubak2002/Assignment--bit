import React from 'react'
import Chart from "react-apexcharts";

const PieChart = (props) => {
  const {one,two,lable1,lable2} = props;
  return (
    <div>
      <Chart
                type="pie"
                series={[one, two]}
                options={
                  
                  {
                  labels: [lable1, lable2],
                }
              }
              ></Chart>
    </div>
  )
}

export default PieChart