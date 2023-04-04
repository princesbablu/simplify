import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        }
    },
    elements: {
        point: {
            radius: 0
        },
        line: {
            borderJoinStyle: 'round'
        }
    }
};

const labels = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];


export function ReportChart({ borderColor, bgStop1, bgStop2 }) {

    return <Line
        options={options}
        data={
            {
                labels,
                datasets: [
                    {
                        fill: true,
                        label: 'Dataset 2',
                        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                        borderColor: borderColor ? borderColor : '#AB72FF',
                        // backgroundColor: backgroundColor ? backgroundColor : '#AB72FF5E',
                        backgroundColor: (context) => {
                            const ctx = context.chart.ctx;
                            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                            gradient.addColorStop(0, bgStop1);
                            gradient.addColorStop(1, bgStop2);
                            return gradient;
                        },
                        borderWidth: 1
                    },
                ],
            }
        } />;
}
