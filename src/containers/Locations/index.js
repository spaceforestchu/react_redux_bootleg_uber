import React, { Component } from 'react';
import './Locations.css';
import { connect } from 'react-redux';


class Locations extends Component {
  render() {
    return (
      <div className='Location'>
        Location
      </div>
    )
  }
}

export default connect()(Locations);
