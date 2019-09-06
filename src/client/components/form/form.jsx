import React from 'react';

import styles from './style.scss';

function FilterList(props) {
    if (props == true) {
        return (
            <div>
                <ul className="list-group">
                    {props.filterResult.map((result, index) => (
                    <li className="list-group-item" key={index} >
                                {result}
                    </li>
                    ))}
                </ul>
                <div> Available Slot: working </div>
            </div>
        )
        } else {
            return (
                <div>
                    <p>no search yet</p>
                </div>)
        }
    }

class Form extends React.Component {

  render() {
    let filterResult =  this.props.filterResult;
    return (
            <div>
                <div><p className={styles.question}>Where would you like to go?</p></div>
                <input className={styles.input} placeholder="searching for.." onChange ={this.props.searchFilter}/>
                <FilterList filterResult ={filterResult}/>
            </div>
    );
  }
}

export default Form;