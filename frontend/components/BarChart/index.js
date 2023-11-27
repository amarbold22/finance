import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import {     
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],  
    });

    const [chartOptions, setChartOptions] = useState({
    });

    useEffect(() => {
        setChartData({
            labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Income',
                    data: [1500000, 2200000, 1400000, 1800000, 2000000, 1700000, 2100000],
                    borderColor: 'rgb(60, 60, 60)',
                    backgroundColor: 'rgb(70, 100, 200, 0.4)',
                },
                {
                    label: 'Expense',
                    data: [1700000, 2000000, 1800000, 1500000, 2400000, 1500000, 2000000],
                    borderColor: 'rgb(60, 60, 60)',
                    backgroundColor: 'rgb(160, 10, 200, 0.4)',
                },
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            }
        })
    }, [])


    return (
    <>
        <div className='w-full m-auto px-4 pb-6 border rounded-lg bg-white'>
            <Bar data={chartData} options={chartOptions}/>
        </div>
    </>
  )
}

export default BarChart