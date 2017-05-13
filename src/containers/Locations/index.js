import React, { Component } from 'react';
import './Locations.css';
import { connect } from 'react-redux';
import AutoComplete from 'react-google-autocomplete';
import { addLocation, findProducts } from '../../actions';


const styles = {
  height: '30px',
  width: '300px',
  borderRadius: '5px',
  border: '1px solid gray',
  margin: '10px auto'
}

class Locations extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }


  render() {

    const { addLocationAction, findProductsAction } = this.props;



    return (
      <div className='Location'>
        <div className='Location-nameWrapper'>
          <span>Enter your name</span>
          <input className='Location-name' value={this.state.name} onChange={ (event) => this.setState({name: event.target.value})}/>
        </div>

        <AutoComplete
          style={styles}
          onPlaceSelected={ (place) => {

            const startLatitude = place.geometry.location.lat();
            const startLongitude = place.geometry.location.lng();
            addLocationAction({startLatitude, startLongitude});

          }}
          type={['address']}
          componentRestrictions={{country: 'us'}}
          />

        <AutoComplete
          style={styles}
          onPlaceSelected={ (place) => {
            const endLatitude = place.geometry.location.lat();
            const endLongitude = place.geometry.location.lng();
            addLocationAction({endLatitude, endLongitude})
          }}
          type={['address']}
          componentRestrictions={{country: 'us'}}
          />
        <button className='Location-button' onClick={ ()=> findProductsAction(this.state.name)}>Find Location</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addLocationAction: (location) => dispatch(addLocation(location)),
  findProductsAction: (name) => dispatch(findProducts(name))
})


export default connect(null, mapDispatchToProps)(Locations);
