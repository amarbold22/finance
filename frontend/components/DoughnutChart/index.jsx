import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const PieChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const tempData = [
    {
      name: "Bill",
      income: 1000000,
      percentage: 15,
      color: "rgb(255, 99, 132)",
    },
    {
      name: "Food",
      income: 1600000,
      percentage: 15,
      color: "rgb(54, 162, 235)",
    },
    {
      name: "Shopping",
      income: 2000000,
      percentage: 15,
      color: "rgb(255,192,203)",
    },
    {
      name: "Insurance",
      income: 2000000,
      percentage: 15,
      color: "rgb(144, 238, 144)",
    },
    {
      name: "Clothing",
      income: 1500000,
      percentage: 15,
      color: "rgb(255, 213, 128)",
    },
  ];

  const [chartOptions, setChartOptions] = useState({});

  const [labelNames, setLabelNames] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setChartData({
      labels: ["Bill", "Food", "Shopping", "Insurance", "Clothing"],
      datasets: [
        {
          label: "Income",
          data: [1000000, 1500000, 2000000, 2500000, 2200000],
          borderWidth: 2,
          backgroundColor: [
            "rgb(20, 150, 13)",
            "rgb(0, 10, 200)",
            "rgb(200, 0, 0)",
            "rgb(210, 130, 180)",
            "rgb(180, 40, 180)",
          ],
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          display: true,
          position: "right",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
    });
  }, []);

  return (
    <div className="w-6/12 px-4 pb-6 rounded-lg bg-white">
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
