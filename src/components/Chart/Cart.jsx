import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({ data, country }) => {



    const [dailyData, setDailyData] = useState([0]);

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await fetchDailyData();

            setDailyData(initialDailyData);
        };

        fetchMyAPI();
    }, []);


    const lineChart = (
        dailyData[0]
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            fill: true,

                        }],
                    }}
                />) : null
    );

    

    const barChart = (
        data.confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['blue', 'yellow', 'red'],
                  data: [data.confirmed.value, data.recovered.value, data.deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current statusin ${country}` },
            }}
          />
        ) : null
      );
    


return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
)

}
export default Chart;