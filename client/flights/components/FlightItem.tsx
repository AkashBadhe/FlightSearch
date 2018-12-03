import * as React from 'react';
import * as classNames from 'classnames';

import { Flight } from '../model';
import FlightTextInput from './FlightTextInput';

let moment = require("moment");
if ("default" in moment) {
    moment = moment["default"];
}
interface FlightItemProps {
  flight: Flight;
}

class FlightItem extends React.Component<FlightItemProps> {
  constructor(props, context) {
    super(props, context);
  }

  formatDate = (date) =>{
    return moment(date).format("ddd DD MMM");
  }

  render() {
    const { flight } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="row">
                {flight.fromCity}
              </div>
              <div className="row">
                {flight.toCity}
              </div>
            </div>
            <div className="col">
              <div className="row">
                {this.formatDate(flight.departure)} - {this.formatDate(flight.arrival)}
              </div>
              <div className="row">
                {flight.airline}
              </div>
            </div>
            <div className="col">
              <div className="row">
                {flight.price}
              </div>
              <div className="row">
                <input type="button" value="Chepest" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlightItem;
