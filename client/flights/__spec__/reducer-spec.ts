// /// <reference path="./../../../node_modules/@types/mocha/index.d.ts" />

// import { expect } from 'chai';

// import reducer from '../reducer';
// import { Flight } from '../model';

// import {
//   ADD_FLIGHT,
//   DELETE_FLIGHT,
//   EDIT_FLIGHT,
//   COMPLETE_FLIGHT,
//   COMPLETE_ALL,
//   CLEAR_COMPLETED
// } from '../constants/ActionTypes';

// describe('todo reducer', () => {
//   it('handles add', () => {
//     let state: Flight[] = [{ id: 0, text: '', completed: true }];

//     state = reducer(state, {
//       type: ADD_FLIGHT,
//       payload: { text: 'hello', completed: false }
//     });

//     expect(state[0]).to.eql(
//       { id: 1, text: 'hello', completed: false }
//     );
//   });

//   it('handles delete', () => {
//     let state: Flight[] = [{ id: 1, text: '', completed: false }];

//     state = reducer(state, {
//       type: DELETE_FLIGHT,
//       payload: { id: 1 } as Flight
//     });

//     expect(state).to.eql([]);
//   });

//   it('handles edit', () => {
//     let state: Flight[] = [{ id: 1, text: '', completed: false }];

//     state = reducer(state, {
//       type: EDIT_FLIGHT,
//       payload: { id: 1, text: 'hello' } as Flight
//     });

//     expect(state[0]).to.eql(
//       { id: 1, text: 'hello', completed: false }
//     );
//   });

//   it('handles complete all', () => {

//     let state: Flight[] = [
//       { id: 1, text: '', completed: false }
//     ];

//     state = reducer(state, {
//       type: COMPLETE_FLIGHT,
//       payload: { id: 1 } as Flight
//     });

//     expect(state[0]).to.eql(
//       { id: 1, text: '', completed: true }
//     );
//   });

//   it('handles complete all', () => {
//     let state: Flight[] = [
//       { id: 1, text: '', completed: false },
//       { id: 2, text: '', completed: true },
//       { id: 3, text: '', completed: false }
//     ];

//     state = reducer(state, {
//       type: COMPLETE_ALL,
//       payload: {} as Flight
//     });

//     expect(state).to.eql([
//       { id: 1, text: '', completed: true },
//       { id: 2, text: '', completed: true },
//       { id: 3, text: '', completed: true }
//     ]);

//     state = reducer(state, {
//       type: COMPLETE_ALL,
//       payload: {} as Flight
//     });

//     expect(state).to.eql([
//       { id: 1, text: '', completed: false },
//       { id: 2, text: '', completed: false },
//       { id: 3, text: '', completed: false }
//     ]);
//   });

//   it('handles clear completed', () => {
//     let state: Flight[] = [
//       { id: 1, text: '', completed: false },
//       { id: 2, text: '', completed: true }
//     ];

//     state = reducer(state, {
//       type: CLEAR_COMPLETED,
//       payload: {} as Flight
//     });

//     expect(state).to.eql([
//       { id: 1, text: '', completed: false }
//     ]);
//   });
// });
