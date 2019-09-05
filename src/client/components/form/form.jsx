import React from 'react';

import styles from './style.scss';

class Form extends React.Component {


  render() {
    return (
            <div className={styles.search}>
                <div>Search Function</div>
                <div><input className={styles.name} placeholder="searching for.." onChange ={this.props.searchFilter}/></div>
                <ul className="list-group">
                  {this.props.searchResults.map((product, index) => (
                    <li className="list-group-item" key={product.id} value = {product.id}>
                    {product.name} <button onClick ={this.props.detailsClick} value={product.id}>Details</button>
                     </li>
                ))}
                </ul>
            </div>
    );
  }
}

export default Form;