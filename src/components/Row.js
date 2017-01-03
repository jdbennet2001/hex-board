import React, { Component } from 'react';

import Hexagon from 'react-hexagon';

export default class Row extends Component {

  isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
  }

  render() {

    debugger;
    var row_number = this.props.row;
    var board_width = this.props.board_width;
    var cells = this.isEven(row_number) ? board_width : board_width -1;

    var hexes = [];
    for ( var i = 0; i < cells; i++ ){

      hexes.push(
          <Hexagon className='hexagon-sample' style={{stroke: 'orange', width:'100px'}} backgroundImage="/img/react-hexagon-flattop.png"
           onClick={() => {console.log("onClick");}}
           flatTop={true}
           hexProps={{
              onMouseEnter: () => {console.log("onMouseEnter");},
              onMouseLeave: () => {console.log("onMouseLeave");},
              style: {stroke: 'purple', width:'50px'}
            }}
           />
      );
    }


    return (
      <div className='row'>
        {hexes}
      </div>
    );
}
}
