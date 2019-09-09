import React from 'react';
import styles from './style.scss';

function Carpark (props) {
    console.log (props);
    if (props.searchResult=="" && props.list =="") {
        return (
            <div className = {styles.result}>no search yet</div>
            )
    } else if (props.searchResult >= 40 && props.list =="") {
        return (
            <div className = {styles.result}>
            <div>{props.searchResult} lots available at</div>
            <div>{props.carparkName}</div>
            </div>
        )
    } else if (props.searchResult < 40 && props.list =="") {
        return (
            <div className = {styles.result}>
            there less than 30 slots here, would you like to checkout the following carparks near your search location? (insert 2 carparks name)
            </div>
        )
    } else if (props.searchResult == "" || props.list !=""){
        return (
            <div className = {styles.result}>
            recommendation list goes here
            </div>
        )
    }
}


export default Carpark;