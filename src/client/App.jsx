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
            lng: 103.8435,
            searchResult: [],
            searchQuery: [],
            filterResult: []
        };
        this.searchFilter = this.searchFilter.bind(this);
        this.checkLot = this.checkLot.bind(this);
    }

    //filter carpark name with user input and display on searchbar
    searchFilter(event){
        if(event.target.value == "") {
            let result = this.state.parkingInfo;
            result= event.target.value;
            this.setState({filterResult: result, searchQuery: result});
        } else {
            console.log(event.target.value.toUpperCase());
            let searchQuery = event.target.value;
            let searchUpperCase = event.target.value.toUpperCase();
            //set state filtered array into  this.state.filterResult
            let parkingInfo = this.state.parkingInfo;
            let result = parkingInfo.filter(carpark=> carpark.address.includes(searchUpperCase));
            console.log(result);
            this.setState({filterResult: result, searchQuery: searchQuery})
        }
    }
    //check for slots using carpark ID code
    checkLot(event) {
        console.log(event.target.getAttribute('data-value'));
        let query = event.target.getAttribute('data-value');
        let lots = this.state.lots;
        let result = lots.filter(carpark=> carpark.carpark_number.includes(query));
        let clearSearch = [];
        this.setState({searchResult: result, filterResult: clearSearch});
    }


    //double ajax call
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
                                <Form searchFilter={this.searchFilter} filterResult={this.state.filterResult} checkLot={this.checkLot} searchResult={this.state.searchResult} searchQuery={this.state.searchQuery}/>
                            </div>
                        </div>
                    </div>
                    );
                }
            }
}

export default hot(module)(App);