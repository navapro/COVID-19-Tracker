import React from 'react';

import {Cards, Charts, CountryPicker} from "./components";
import fetchData from './api';

import styles from './App.module.css';

class App extends React.Component {

    async ComponentDidMount(){
        const data = await fetchData();

        console.log(data)
    }
    render(){
        return(
            <div className ={styles.container}>
                <Cards/>
                <CountryPicker/>
                <Charts/>
            </div>
        );
    }
}

export default App ;