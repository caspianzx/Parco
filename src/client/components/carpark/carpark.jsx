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
                <div>Free Parking Info</div>
                <div>{props.info[0].free_parking}</div>
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
                <div> Search Result</div>
                    <div>
                        <ul className="list-group">
                        {props.list.slice(0,5).map((result, index) => (
                            <li className="list-group-item" id={styles.searchList} key={index} data-value ={result.car_park_no} data-address={result.address} data-id={result._id} onClick ={props.checkLot}>
                            {result.address}
                            </li>
                        ))}
                        </ul>
                   </div>
            </div>
        )
    }
}

export default Carpark;