import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import Row from '../components/Row';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
class App extends Component {

  render() {
    // debugger;
    // we can use ES6's object destructuring to effectively 'unpack' our props
    //const { counter, actions } = this.props;
    const board_width=this.props.board_width;
    const board_height=this.props.board_height;

    //Create an array of ascending numbers (0...n) to represent the rows
    const rows = Array.from(Array(board_height).keys());

    return (
      <div className='board'>
        {
          rows.map( (row,index) => (<Row row={index} board_width={board_width}></Row>))
        }
    </div>
    );
  }
}

App.propTypes = {
  board_width: PropTypes.number.isRequired,
  board_height: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    board_width: state.model.board_width,
    board_height: state.model.board_height,
    all: state
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
