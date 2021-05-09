import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';

const options = {
    legent: {
        display: false
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: 'time',
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: 'll'
                },
            },
        ],
        yAxes: [
            {
                gridlines: {
                    display: false,
                },
                ticks: {
                    callback: function(value , index,values){
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    }
}

function LineGraph({casesType = 'cases' , color}) {

    const [data, setData] = useState({});

    const buildChartData = (data) => {
        const chartData = [];
        let lastDataPoint;
        for (let date in data[casesType]) {
            if (lastDataPoint) {
                const newDataPoint = {
                    x: date,
                    y: data[casesType][date] - lastDataPoint
                }
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[casesType][date];
        }

        return chartData;
    }


    useEffect(() => {

        const fetchData = async () => {
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
            .then(response => response.json())
            .then(data => {
                const chartdata = buildChartData(data , casesType);
                setData(chartdata);
            });
        }

        fetchData();
        
    }, [casesType]);



    return (
        <div className="graph">
            {data?.length > 0 && (
                <Line
                    data={{
                        datasets: [{
                            data: data ,
                            backgroundColor: color,
                            borderColor: color,
                            label: `Covid-19 ${casesType}`
                        }]
                    }}
                    options={options}
                    height={250}
                />

            )}
        </div>
    );
}

export default LineGraph;