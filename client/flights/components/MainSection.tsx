import * as React from 'react';
import { Flight } from '../model';
import FlightItem from './FlightItem';
import Footer from './Footer';

interface MainSectionProps {
  flights: Flight[];
};

class MainSection extends React.Component<MainSectionProps> {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { flights } = this.props;
    return (
      <section className="main">
        {flights && flights.length && flights.map(flight =>
          <FlightItem
            key={"flight-item-" + flight.id}
            flight={flight} />
        )}
      </section>
    );
  }
}

export default MainSection;
