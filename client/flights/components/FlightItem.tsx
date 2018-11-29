import * as React from 'react';
import * as classNames from 'classnames';

import { Flight } from '../model';
import FlightTextInput from './FlightTextInput';

interface FlightItemProps {
  todo: Flight;
  editFlight: (todo:Flight, text:string)=>void;
  deleteFlight: (todo:Flight)=>void;
  completeFlight: (todo:Flight)=>void;
  key?: any;
}
interface FlightItemState {
  editing: boolean;
};

class FlightItem extends React.Component<FlightItemProps, FlightItemState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(todo:Flight, text:string) {
    if (text.length === 0) {
      this.props.deleteFlight(todo);
    } else {
      this.props.editFlight(todo, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const {todo, completeFlight, deleteFlight} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <FlightTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo, text)}/>
      );
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeFlight(todo)} />
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {todo.text}
          </label>
          <button className="destroy"
                  onClick={() => deleteFlight(todo)} />
        </div>
      );
    }

    return (
      <li className={classNames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    );
  }
}

export default FlightItem;
