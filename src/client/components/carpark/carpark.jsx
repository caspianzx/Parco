import React from 'react';
import styles from './style.scss';

function Carpark (props) {
    console.log (props);
    if (props.searchResult=="" && props.list =="") {
        return (
            <div className = {styles.result}></div>
        )
    } else if (props.searchResult >= 40 && props.list =="") {
        return (
            <div className = {styles.result}>
                <div className= {styles.circle}>
                    <p className={styles.lot}>{props.searchResult}</p>
                    <p className={styles.lotword}> lots </p>
                </div>
            <div className ={styles.otherInfo}>
                <div className={styles.rightInfo}>{props.carparkName}</div>
                <div className={styles.rightInfo}>Free Parking:</div>
                <div className={styles.rightInfo}>{props.info[0].free_parking}</div>
                </div>
            </div>


        )
    } else if (props.searchResult < 40 && props.list =="") {
        return (
            <div className = {styles.result}>
                <div className= {styles.circleRed}>
                    <p className={styles.lot}>{props.searchResult}</p>
                    <p className={styles.lotword}> lots </p>
                </div>
            <div className ={styles.otherInfo}>
                <div className={styles.rightInfo}>{props.carparkName}</div>
                <div className={styles.rightInfo}>Free Parking:</div>
                <div className={styles.rightInfo}>{props.info[0].free_parking}</div>
                </div>
            </div>
        )
    } else if (props.searchResult == "" || props.list !=""){
        return (
            <div>
                <div className = {styles.enterResult}> Search Result</div>
                    <div>
                        <ul className="list-group">
                        {props.list.slice(0,9).map((result, index) => (
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