import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import Loader from 'react-loader-advanced';

import {
  Header,
  MainSection,
  model,
} from '../../flights';

interface AppProps {
  dispatch: Dispatch<{}>;
  iState: model.IState;
}

class App extends React.Component<AppProps> {
  render() {
    const { iState, dispatch } = this.props;
    return (
      <div className="todoapp">
        <Loader show={iState.loading} message={'loading'}>
          <Header addFlight={(text: string) => dispatch(addFlight(text))} />
          <MainSection
              flights={iState.flights}
              editFlight={(t,s) => dispatch(editFlight(t, s))}
              deleteFlight={(t: model.Flight) => dispatch(deleteFlight(t))}
              completeFlight={(t: model.Flight) => dispatch(completeFlight(t))}
              clearCompleted={() => dispatch(clearCompleted())}
              completeAll={() => dispatch(completeAll())}/>
        </Loader>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  state.flights.loading = state.asyncInitialState.loading || state.flights.loading
  return {
    iState: state.flights
  }
};

export default connect(mapStateToProps)(App);
