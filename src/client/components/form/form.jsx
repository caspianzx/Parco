import React from 'react';

import styles from './style.scss';

function FilterList(props) {
    console.log(props.filterResult)
    if (props.filterResult == "") {
        return (
            <div className={styles.nosearch}>
                <p>no search yet</p>
            </div>
        )
        } else {
            return (
                <div>
                                <ul className="list-group">
                    {props.filterResult.map((result, index) => (
                    <li className="list-group-item" id={styles.filterResult} key={index} >
                    {result.address}
                    </li>
                    ))}
                </ul>
                </div>
            );
        }
    }

class Form extends React.Component {

    render() {
        let filterResult =  this.props.filterResult;
        return (
            <div>
                <div>
                    <p className={styles.question}>Where would you like to go?</p>
                </div>
                    <input className={styles.input} placeholder="searching for.." onChange ={this.props.searchFilter}/>
                <FilterList filterResult ={filterResult}/>
            </div>
        );
      }
}

export default Form;