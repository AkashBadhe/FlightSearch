import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import Loader from 'react-loader-advanced';

import {
    Header,
    MainSection,
    model,
    getFlights,
    updateCityFilter
} from './index';

interface FlightsContainerProps {
    dispatch: Dispatch<{}>;
    flights: model.Flight[];
    selectedCities: string[];
    selectedDate: string;
    loading: boolean,
    filteredFlights: model.Flight[]
}

class Flights extends React.Component<FlightsContainerProps> {

    handleCityChange = (e: string[]) => {
        this.props.dispatch(updateCityFilter(e))
    }

    handleDateChange = (e) => {

    }

    getOptions = () => {
        let cities = [];
        this.props.flights.map((flight: model.Flight) => {
            if (cities.indexOf(flight.fromCity) == -1) {
                cities.push({ value: flight.fromCity, label: flight.fromCity });
            }
            if (cities.indexOf(flight.toCity) == -1) {
                cities.push({ value: flight.toCity, label: flight.toCity });
            }
        });

        return cities;
    }
    render() {
        const { flights, loading, selectedCities, selectedDate, filteredFlights, dispatch } = this.props;
        return (
            <Loader show={loading} message={'loading'}>
                <Header
                    options={this.getOptions()}
                    selectedOption={selectedCities}
                    handleChange={(e) => this.handleCityChange(e)}
                />
                <MainSection
                    flights={filteredFlights} />
            </Loader>
        );
    }
}

const mapStateToProps = state => {
    state.flights.loading = state.asyncInitialState.loading || state.flights.loading;
    const flightsState = state.flights;
    return {
        flights: flightsState.flights,
        loading: flightsState.loading,
        selectedCities: flightsState.selectedCities,
        selectedDate: flightsState.selectedDate,
        filteredFlights: flightsState.filteredFlights
    }
};

export default connect(mapStateToProps)(Flights);
