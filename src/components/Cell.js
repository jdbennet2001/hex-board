import React, { Component } from 'react';

import Hexagon from './Hexagon-SVG/Hexagon';

export default class Cell extends Component {

  _onClick(e){
    console.log('..click');
  }

  _onEnter(key){
    console.log('..enter cell: ' + key );
    this.props.actions.mouse_enter_cell(key);
    console.log( '..action fired: ' + key );
  }


  _onLeave(e){
    console.log( '..leave');
  }

  isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
  }

  render() {

      // var key = this.props.column + ' - ' + this.props.row;

      var prefix = this.isEven(this.props.row) ? (this.props.column * 2) : this.props.column * 2 -1;
      var suffix = Math.floor(this.props.row/2) +1;

      const key = prefix + ' - ' + suffix;

      var highlight = (this.props.selected == key);

      var style = {stroke: 'orange',  width:'100px'};
      if ( highlight ){
        style.fill = 'orange';
      }

      var self = this;



      return  <Hexagon className='hexagon-sample' key={key} style={style}
           onClick={() => {console.log("onClick");}}
           flatTop={true}
           hexProps={{
              // onMouseEnter: () => {console.log("onMouseEnter: " + key ); self._onEnter(key); },
              // onMouseMove: () => {console.log("onMouseMove: " + key ); self._onEnter(key); },
              // onMouseLeave: () => {console.log("onMouseLeave: " + key );},
              style: {fill: 'purple'}

            }} >
              <text x="50%" y="70%" style={{fill: 'black' }} >{key}</text>

          </Hexagon>;
    }
}
