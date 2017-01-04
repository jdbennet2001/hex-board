import initialState from '../data/initialState.json';


import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';


export default function model(state = {}, action) {

  var default_model = initialState;
  console.log( JSON.stringify(default_model) );
  switch (action.type) {
    case '@@INIT':
      return initialState;
    default:
      return initialState;
  }
}
