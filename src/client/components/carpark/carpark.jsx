import React from 'react';
import styles from './style.scss';

function Carpark (props) {
    console.log (props);
    if (props.searchResult=="") {
        return (
            <div className = {styles.result}>no result</div>
            )
    } else if (props.searchResult >= 31) {
        return (
            <div className = {styles.result}>
            <div>{props.searchResult} lots available at</div>
            <div>{props.carparkName}</div>
            </div>
        )
    } else if (props.searchResult < 30) {
        return (
            <div className = {styles.result}>
            there less than 30 slots here, would you like to checkout the following carparks near your search location? (insert 2 carparks name)
            </div>
        )
    }
}


export default Carpark;