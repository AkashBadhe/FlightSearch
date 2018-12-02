import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import Loader from 'react-loader-advanced';
import Flights from '../../flights/flightsContainer';


interface AppProps {
}

class App extends React.Component<AppProps> {
  render() {
    return (
      <div className="container">
        <Flights />
      </div>
    );
  }
}

export default App;
