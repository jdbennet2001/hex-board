import React, { Component } from 'react';

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
      cells.push( {row: this.props.row, column: i, key: this.props.row + ' - ' + i } );
    }

    var key = 'row: ' + this.props.row;

    return (
      <div className='row' >
        {cells.map((cell, index) => (
          <Cell row={cell.row} column={cell.column} actions={this.props.actions} selected={this.props.selected} key={cell.key}></Cell>
        ))}
      </div>
    );
}
}
