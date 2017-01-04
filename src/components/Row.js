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

      var key = row_number + '-' + i;

      hexes.push(
          <Hexagon className='hexagon-sample' key={key} style={{stroke: 'orange', width:'100px'}}
           onClick={() => {console.log("onClick");}}
           flatTop={true}
           hexProps={{
              onMouseEnter: () => {console.log("onMouseEnter: " + JSON.stringify({key}) );},
              onMouseLeave: () => {console.log("onMouseLeave: " + {key} );},
              style: {stroke: 'purple', width:'50px'}
            }} >
            <text x="50%" y="70%" style={{fill: 'black' }} >{key}</text>
          </Hexagon>
      );
    }


    return (
      <div className='row'>
        {hexes}
      </div>
    );
}
}
