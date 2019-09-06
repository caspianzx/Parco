import React from 'react';

import styles from './style.scss';

function FilterList(props) {
    //filtered results on change
    console.log(props.filterResult)
    //object containing number
    console.log(props.searchResult)
    if (props.filterResult == "" && props.searchResult=="") {
        return (
            <div className={styles.nosearch}>
                <p>no search yet</p>
            </div>
        )
        } else if (props.filterResult != "" && props.searchResult== "") {
            return (
                <div>
                                <ul className="list-group">
                    {props.filterResult.slice(0,6).map((result, index) => (
                    <li className="list-group-item" id={styles.filterResult} key={index} data-value ={result.car_park_no} onClick ={props.checkLot}>
                    {result.address}
                    </li>
                    ))}
                </ul>
                </div>
            );
        } else if (props.filterResult == "" && props.searchResult != "") {
            return (
                <div>
                <div> Available slots </div>
                <p>{props.searchResult[0].carpark_info[0].lots_available}</p>
                </div>
                )
        }
    }



class Form extends React.Component {

    render() {
        let filterResult = this.props.filterResult;
        let checkLot =  this.props.checkLot;
        let searchResult = this.props.searchResult;
        return (
            <div>
                <div>
                    <p className={styles.question}>Where would you like to go?</p>
                </div>
                    <input className={styles.input} placeholder="searching for.." onChange ={this.props.searchFilter} value ={this.props.searchQuery}/>
                <FilterList filterResult ={filterResult} checkLot={checkLot} searchResult={searchResult}/>
            </div>
        );
      }
}

export default Form;