import React from 'react';

import styles from './style.scss';
import main_styles from '../../style.scss';

class Info extends React.Component {



  render() {
    return (
        <div>
        <div> Details </div>
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                Name: {this.props.details.name}
                </li>
                <li className="list-group-item">
                Price: {this.props.details.price}
                </li>
                <li className="list-group-item">
                Description: {this.props.details.description}
                </li>
                 <li className="list-group-item">
                <button onClick={this.props.addCart} value ={this.props.details.id}>Add to Cart </button>
                </li>
             </ul>
            </div>

        </div>
    );
  }
}


export default Info;