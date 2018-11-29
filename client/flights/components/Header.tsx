import * as React from 'react';

import FlightTextInput from './FlightTextInput';

interface HeaderProps {
  addFlight: (text:string)=> any;
};

class Header extends React.Component<HeaderProps> {
  handleSave(text: string) {
    if (text.length !== 0) {
      this.props.addFlight(text);
    }
  }

  render() {
    return (
      <header className="header">
          <h1>flights</h1>
          <FlightTextInput
            newFlight
            onSave={this.handleSave.bind(this)}
            placeholder="What needs to be done?" />
      </header>
    );
  }
}

export default Header;
