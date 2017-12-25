import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import Loader from 'react-loader-advanced';

import {
  Header,
  MainSection,
  model,
  addTodo,
  editTodo,
  clearCompleted,
  completeAll,
  completeTodo,
  deleteTodo
} from '../../todos';

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
          <Header addTodo={(text: string) => dispatch(addTodo(text))} />
          <MainSection
              todos={iState.todos}
              editTodo={(t,s) => dispatch(editTodo(t, s))}
              deleteTodo={(t: model.Todo) => dispatch(deleteTodo(t))}
              completeTodo={(t: model.Todo) => dispatch(completeTodo(t))}
              clearCompleted={() => dispatch(clearCompleted())}
              completeAll={() => dispatch(completeAll())}/>
        </Loader>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  state.todos.loading = state.asyncInitialState.loading || state.todos.loading
  return {
    iState: state.todos
  }
};

export default connect(mapStateToProps)(App);
