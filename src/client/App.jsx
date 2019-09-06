import React from 'react';
import { hot } from 'react-hot-loader';
import MapContainer from './components/map/map';
import Info from './components/info/info';
import Form from './components/form/form';
import Carpark from './components/carpark/carpark';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        error: null,
        isLoaded: false,
        lots: [],
        parkingInfo:[],
        lat: 1.2751,
        lng: 103.8435
    };
  }



    componentDidMount() {
        Promise.all([fetch('https://api.data.gov.sg/v1/transport/carpark-availability'), fetch('https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&limit=3726')])

            .then(([res1, res2]) => {
            return Promise.all([res1.json(), res2.json()])
            })
            .then(([res1, res2]) => {
            // console.log(res1)
            // console.log(res2.result.records)
            // set state in here
                this.setState({
                    isLoaded: true,
                    lots: res1.items[0].carpark_data,
                    parkingInfo: res2.result.records
                });
            },(error) => {
                    this.setState({
                    isLoaded: true,
                    error
                    });
            }
          );
    }



    render() {
        const { error, isLoaded, products } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            return (
                    //experiment with material ui
                    <div className = "container">
                        <div className = "row">
                            <div className ="col">
                                <MapContainer  lat={this.state.lat} lng={this.state.lng}/>
                            </div>
                        </div>
                    </div>
                    );
                }
            }
}

export default hot(module)(App);