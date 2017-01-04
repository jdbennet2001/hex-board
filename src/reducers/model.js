import initialState from '../data/initialState.json';


export default function model(state = {}, action) {

  var default_model = initialState;
  console.log( JSON.stringify(default_model) );
  switch (action.type) {
    case '@@INIT':
      return initialState;
    case 'MOUSE_ENTER':
      return Object.assign({}, initialState, {selected: action.selected });
    case 'MOUSE_EXIT' :
      return Object.assign({}, initialState, {selected: action.selected});
    default:
      return initialState;
  }
}
