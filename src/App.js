import React from 'react';

// import Card from './components/Card/Card';
// import Chart from './components/Chart/Cart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Card, Chart, CountryPicker } from './components';

import styles from './App.module.css';

import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }
    handleCountryChange = async (country) => {
        const fechtedData = await fetchData(country);
        this.setState({data:fechtedData,country:country})
        
        
    }



    render() {

        const { data,country } = this.state;

        return (
            <div className={styles.container}>
                <Card data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />

            </div>
        );
    }
}

export default App;