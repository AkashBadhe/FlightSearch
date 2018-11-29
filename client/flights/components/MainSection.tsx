import * as React from 'react';

import { Flight } from '../model';
import FlightItem from './FlightItem';
import Footer from './Footer';
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../constants/FlightFilters';

const FLIGHT_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

interface MainSectionProps {
  flights: Flight[];
  clearCompleted: ()=>void;
  completeAll: ()=>void;
  editFlight: (todo:Flight, text:string)=>void;
  completeFlight: (todo:Flight)=>void;
  deleteFlight: (todo:Flight)=>void;
};
interface MainSectionState {
  filter: string;
};

class MainSection extends React.Component<MainSectionProps, MainSectionState> {
  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.flights.some(todo => todo.completed);
    if (atLeastOneCompleted) {
      this.props.clearCompleted();
    }
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  renderToggleAll(completedCount) {
    const { flights, completeAll } = this.props;
    if (flights.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === flights.length}
               onChange={() => completeAll()} />
      );
    }
  }

  renderFooter(completedCount) {
    const { flights } = this.props;
    const { filter } = this.state;
    const activeCount = flights.length - completedCount;

    if (flights.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted.bind(this)}
                onShow={this.handleShow.bind(this)} />
      );
    }
  }

  render() {
    const { flights, completeFlight, deleteFlight, editFlight } = this.props;
    const { filter } = this.state;

    const filteredFlights = flights.filter(FLIGHT_FILTERS[filter]);
    const completedCount = flights.reduce((count: number, todo): number =>
      todo.completed ? count + 1 : count,
      0
    );

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredFlights.map(todo =>
            <FlightItem
              key={todo.id}
              todo={todo}
              editFlight={editFlight}
              completeFlight={completeFlight}
              deleteFlight={deleteFlight}/>
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}

export default MainSection;
