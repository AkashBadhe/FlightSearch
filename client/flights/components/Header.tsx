import * as React from 'react';
import Select from 'react-select';
import DatePicker from 'react-date-picker';
import FlightTextInput from './FlightTextInput';

interface HeaderProps {
  selectedOption: string[];
  options: string[];
  handleChange: (e) => any;
  selectedDate: Date;
  handleDateChange: (e) => any;

}

class Header extends React.Component<HeaderProps>{
  render() {
    const { selectedOption, options, handleChange, selectedDate, handleDateChange } = this.props;
    return (
      <header className="header">
        <div className="row">
          <div className="col-8">
            <Select
              value={selectedOption}
              onChange={(e) => handleChange(e)}
              options={options}
              closeMenuOnSelect={false}
              isMulti
            />
          </div>
          <div className="col-4">
          <DatePicker
            onChange={(e) => handleDateChange(e)}
            value={selectedDate}
          />
          </div>

        </div>
      </header>
    );
  }
}

export default Header;
