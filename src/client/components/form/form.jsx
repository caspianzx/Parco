import React from 'react';

import styles from './style.scss';

class Form extends React.Component {


  render() {
    return (
            <div>
                <div><p className={styles.question}>Where would you like to go?</p></div>

                <input className={styles.input} placeholder="searching for.." onChange ={this.props.searchFilter}/>



                <ul className="list-group">
                  {this.props.filterResult.map((result, index) => (
                    <li className="list-group-item" key={index} >
                    {result}
                     </li>
                ))}
                </ul>

                <div> Available Slot : {this.props.searchResult} </div>

            </div>
    );
  }
}

export default Form;