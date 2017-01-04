import initialState from '../data/initialState.json';


import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';


export default function counter(state = {}, action) {

  debugger;
  switch (action.type) {
    case '@@INIT':
      return initialState;
    default:
      return initialState;
  }
}
