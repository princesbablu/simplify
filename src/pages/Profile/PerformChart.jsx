import React, { useState } from 'react';
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

export function PerformChart({ borderColor, bgStop1, bgStop2 }) {

    const initialDates = [
        "2023-04-25",
        "2023-04-26",
        "2023-04-27",
        "2023-04-28",
        "2023-04-29",
        "2023-04-30",
        "2023-05-01",
        "2023-05-02",
        "2023-05-03",
        "2023-05-04",
        "2023-05-05",
        "2023-05-06",
        "2023-05-07",
        "2023-05-08",
        "2023-05-09",
        "2023-05-10",
        "2023-05-11",
        "2023-05-12",
        "2023-05-13",
        "2023-05-14",
        "2023-05-15",
        "2023-05-16",
        "2023-05-17",
        "2023-05-18",
        "2023-05-19",
        "2023-05-20",
        "2023-05-21",
        "2023-05-22",
        "2023-05-23",
        "2023-05-24",
        "2023-05-25",
    ];
    const initialDataPoints = [1, 2, 4, 9, 12, 15, 16, 14, 18, 12, 19, 18, 17, 15, 13, 1, 2, 4, 9, 12, 15, 16, 14, 18, 12, 19, 18, 17, 15, 13, 10];

    const [dates, setDates] = useState(initialDates);
    const [dataPoints, setDataPoints] = useState(initialDataPoints);


    function filterDate(date) {
        switch (date) {
            case "day":
                const day = initialDates.slice(0, 2);
                const dayPoint = initialDataPoints.slice(0, 2)

                setDates(day);
                setDataPoints(dayPoint);
                break;
            case "week":
                const week = initialDates.slice(0, 7);
                const weekPoint = initialDataPoints.slice(0, 7)

                setDates(week);
                setDataPoints(weekPoint);
                break;
            case "month":
                const month = initialDates.slice(0, 14);
                const monthPoint = initialDataPoints.slice(0, 14)

                setDates(month);
                setDataPoints(monthPoint);
                break;
            case "year":
                const year = initialDates.slice(0, initialDates.length);
                const yearPoint = initialDataPoints.slice(0, initialDates.length)

                setDates(year);
                setDataPoints(yearPoint);
                break;

            default:
                break;
        }
    }

    return (
        <>
            <Line
                options={options}
                data={
                    {
                        labels: dates,
                        datasets: [
                            {
                                fill: true,
                                label: 'Dataset 2',
                                // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                                data: dataPoints,
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
                } />

            <div className="flex gap-1 items-center mt-4">
                <div className="px-2 py-1 rounded bg-[#1F2124] hover:bg-[#F86666] text-[8px] font-bold cursor-pointer"
                    onClick={() => filterDate("day")}>1D</div>
                <div className="px-2 py-1 rounded bg-[#1F2124] hover:bg-[#F86666] text-[8px] font-bold cursor-pointer"
                    onClick={() => filterDate("week")}>1W</div>
                <div className="px-2 py-1 rounded bg-[#1F2124] hover:bg-[#F86666] text-[8px] font-bold cursor-pointer"
                    onClick={() => filterDate("month")}>1M</div>
                <div className="px-2 py-1 rounded bg-[#1F2124] hover:bg-[#F86666] text-[8px] font-bold cursor-pointer"
                    onClick={() => filterDate("year")}>1Y</div>
            </div>
        </>
    )
}
