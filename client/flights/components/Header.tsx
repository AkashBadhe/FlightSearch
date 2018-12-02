import * as React from 'react';
import Select from 'react-select';

import FlightTextInput from './FlightTextInput';

interface HeaderProps {
  selectedOption: string[];
  options: string[];
  handleChange: (e) => any;
}

class Header extends React.Component<HeaderProps>{
  render() {
    const { selectedOption, options, handleChange } = this.props;
    return (
      <header className="header">
        <div className="">
          <Select
            value={selectedOption}
            onChange={(e) => handleChange(e)}
            options={options}
            closeMenuOnSelect={false}
            isMulti
          />
        </div>
      </header>
    );
  }
}

export default Header;
