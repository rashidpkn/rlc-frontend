import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS ,CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,} from "chart.js";

function Graph({date,view}) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        )
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' 
          },
          
        },
      };

      const labels = date
       const data = {
        labels,
        datasets: [
          {
            label: 'Views',
            data: view,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

  return (
    <div className="graph h-96 w-full">
        <Line  options={options} data={data} />
    </div>
    
  )
}

export default Graph