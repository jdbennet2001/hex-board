import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

export function mouse_enter_cell(key) {
  return {
    type: 'MOUSE_ENTER',
    selected: key
  };
}

export function mouse_exit_cell(key) {
  return {
    type: 'MOUSE_EXIT',
    selected: null
  };
}
