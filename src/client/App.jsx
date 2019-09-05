import React from 'react';
import { hot } from 'react-hot-loader';

import MapContainer from './components/map/map';
import Info from './components/info/info';
import Form from './components/form/form';
import Carpark from './components/carpark/carpark';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        error: null,
        isLoaded: false,
        lots: [],
        carparkDetails:[],
        lat: 1.2751,
        lng: 103.8435
    };
  }

//ajax
    componentDidMount() {
        fetch("https://api.data.gov.sg/v1/transport/carpark-availability")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
              this.setState({
                isLoaded: true,
                lots: result.items[0].carpark_data
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }


    render() {
        const { error, isLoaded, products } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            return (
                    <div className = "container">
                    <div className ="row">
                    <h1>Parco</h1>
                    <h2>Where would you like to go today?</h2>
                    </div>
                    <div>
                    <input placeholder="search for carpark.."></input>
                    </div>

                        <div className = "row">

                            <div className ="col-4">
                            <div>carpark</div>
                            <ul className="list-group">
                                {this.state.lots.map((carpark, index) => (
                                <li className="list-group-item" key={index}>
                            {carpark.carpark_number}
                             </li>
                            ))}
                            </ul>
                            </div>
                            <div className ="col-4">
                                <div>slots</div>
                                    <ul className="list-group">
                                        {this.state.lots.map((carpark, index) => (
                                        <li className="list-group-item" key={index}>
                                        {carpark.carpark_info[0].total_lots}
                                        </li>
                                        ))}
                                     </ul>
                                </div>
                            <div className ="col-4">
                                <div>location</div>
                                <MapContainer  lat={this.state.lat} lng={this.state.lng}/>
                            </div>
                        </div>
                    </div>
                    );
                }
            }
}

export default hot(module)(App);