import React from 'react';

import styles from './style.scss';

class Form extends React.Component {


  render() {
    return (
            <div className={styles.search}>
                <div>Where would you like to go?</div>
                <div><input className={styles.name} placeholder="searching for.." onChange ={this.props.searchFilter}/></div>
            </div>
    );
  }
}

export default Form;