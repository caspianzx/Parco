render() {
        const { error, isLoaded, products } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            return (

                    <div className = "container">
                     <Button variant="contained" color="primary">
                      Material UI button
                     </Button>
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


//backup code//

Geocode.setApiKey("AIzaSyDW4ONvvWPJw4dnSIu1UVQQRjvZ0bCHL68");
Geocode.enableDebug();


Geocode.fromAddress(geoQuery).then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  error => {
    console.error(error);
  }
);