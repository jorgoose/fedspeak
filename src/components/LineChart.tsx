// LineChart.tsx
'use client'; // Ensures this component is client-side only
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const LineChart = () => {
  const data = {
    labels: ['2004', '2008', '2012', '2016', '2020', '2024'], // X-axis labels
    datasets: [
      {
        label: 'Inflation Trend',
        // data: [30, 45, 50, 70, 60, 80], // Fake data points
        data: [8, 12, 12, 14, 15, 13, 14], // Fake data points
        // Average: 12.5
        borderColor: '#4f46e5', // Sleek blue color for line
        backgroundColor: 'rgba(79, 70, 229, 0.1)', // Light fill under the line
        fill: true,
        tension: 0.4, // Smooth curve
        pointBackgroundColor: '#4f46e5', // Color of points on the line
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4f46e5',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#4f46e5',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hides grid lines for a cleaner look
        },
        ticks: {
          color: '#6b7280', // Gray color for x-axis labels
        },
      },
      y: {
        grid: {
          borderDash: [6, 4], // Dashed grid lines for y-axis
          color: '#e5e7eb', // Light gray grid lines
        },
        ticks: {
          color: '#6b7280', // Gray color for y-axis labels
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
