import React, { Component } from 'react';

import Hexagon from 'react-hexagon';
import Cell from "./Cell";

export default class Row extends Component {

  isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
  }

  render() {

    var board_width = this.props.board_width;
    var row_width = this.isEven(this.props.row) ? board_width : board_width -1;
    var cells = [];
    for ( let i = 0; i < row_width; i++ ){
      cells.push( {row: this.props.row, column: i} );
    }

    var key = 'row: ' + this.props.row;
    console.log( 'Row key is: ' + key );

    return (
      <div className='row' key={key} >
        {cells.map((cell, index) => (
          <Cell row={cell.row} column={cell.column}></Cell>
        ))}
      </div>
    );
}
}
