import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import Locations from './containers/Locations';

export default (
  <Route path={'/'} component={App}>
    <Route path={'locations'} component={Locations}/>
  </Route>
)
