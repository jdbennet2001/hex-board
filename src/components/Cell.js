import React, { Component } from 'react';

import Hexagon from 'react-hexagon';

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

  render() {

      var key = this.props.row + ' - ' + this.props.column;
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
