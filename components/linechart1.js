'use client'; // If you're using App Router in Next.js

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function LineChart() {
    const data = {
        labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [
            {
                label: 'Sales Over Time',
                data: [12, 19, 15, 10, 2, 23, 5, 7, 18, 9, 29, 19, 2, 22, 30, 25, 28, 5, 10, 2, 14, 8, 10, 6, 9.6, 9, 3, 5, 3, 19, 30, 20, 29, 20],
                borderColor: '#2B95FF',
                borderWidth: 2,
                backgroundColor: '#2B95FF',
                fill: false,
                tension: 0.3,
                pointRadius: 0,
                pointHoverRadius: 5
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Temperature oC',

            }
        },
        scales: {
            y: { beginAtZero: true }
        }
    };

    return <Line data={data} options={options} />;
}
