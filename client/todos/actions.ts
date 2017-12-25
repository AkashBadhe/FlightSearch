import { createAction } from 'redux-actions';
import { Todo } from './model';
import courseApi from './api/mockApi';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
  GET_TODOS
} from './constants/ActionTypes';


const getToDos = createAction<any>(
    GET_TODOS, 
    () => courseApi.getToDos()
); 

const addTodo = createAction<any, string>(
    ADD_TODO, 
    (string) => courseApi.saveToDo(string)
); 

const deleteTodo = createAction<Todo, Todo>(
  DELETE_TODO,
  (todo: Todo) => todo
);

const editTodo = createAction<Todo, Todo, string>(
  EDIT_TODO,
  (todo: Todo, newText: string) => ({ ...todo, text: newText })
);

const completeTodo = createAction<Todo, Todo>(
  COMPLETE_TODO,
  (todo: Todo) => todo
)

const completeAll = createAction<void>(
  COMPLETE_ALL,
  () => { }
)

const clearCompleted = createAction<void>(
  CLEAR_COMPLETED,
  () => { }
);

export {
  getToDos,
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted
}
