import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: [],
    datasets: [
        {
            data: [8000, 12000, 6000, 2000],
            backgroundColor: [
                '#AAE6FF',
                '#E9A34C',
                '#6467F6',
                'rgba(99, 97, 177, 0.6)'
            ],
            borderColor: [
                '#141517',
                '#141517',
                '#141517',
                '#141517',
            ],
            borderWidth: 4,
            borderRadius: 1000,
            cutout: '80%',
        },
    ]
};

export function ProChart() {
    return <Doughnut data={data} />;
}