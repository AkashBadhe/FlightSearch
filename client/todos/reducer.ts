import { handleActions, Action } from 'redux-actions';

import { Todo, IState } from './model';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from './constants/ActionTypes';

const initialState: IState = {
  todos: [],
  loading: false
};

export default handleActions<IState, Todo>({

  ["GET_TODOS_PENDING"]: (state: IState, action: Action<Todo>): IState => {
    return {
      todos: state.todos,
      loading: true
    }
  },

  ["GET_TODOS_FULFILLED"]: (state: IState, action: Action<any>): IState => {
    return {
      todos: action.payload.data,
      loading: false
    }
  },

  ["ADD_TODO_PENDING"]: (state: IState, action: Action<Todo>): IState => {
    return {
      todos: state.todos,
      loading: true
    }
  },

  ["ADD_TODO_FULFILLED"]: (state: IState, action: Action<Todo>): IState => {
    return {
      todos: [{
        id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: action.payload.completed,
        text: action.payload.text,
      }, ...state.todos],
      loading: false
    }
  },
  

  [DELETE_TODO]: (state: IState, action: Action<Todo>): IState => {
    return {
      todos: state.todos.filter(todo =>
        todo.id !== action.payload.id
      ),
      loading: false
    };
  },

  [EDIT_TODO]: (state: IState, action: Action<Todo>): IState => {
    return {
      todos: state.todos.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      )
    }
  },

  [COMPLETE_TODO]: (state: IState, action: Action<Todo>): IState => {
    return {
      todos: state.todos.map(todo =>
        todo.id === action.payload.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )
    };
  },

  [COMPLETE_ALL]: (state: IState, action: Action<Todo>): IState => {
    const areAllMarked = state.todos.every(todo => todo.completed);
    return {
      todos: state.todos.map(todo => ({ ...todo,
        completed: !areAllMarked
      }))
    }
  },

  [CLEAR_COMPLETED]: (state: IState, action: Action<Todo>): IState => {
    return {
      todos: state.todos.filter(todo => todo.completed === false)
    }
  }
}, initialState);
