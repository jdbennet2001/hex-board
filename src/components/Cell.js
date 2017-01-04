import React, { Component } from 'react';

import Hexagon from 'react-hexagon';

export default class Cell extends Component {

  _onClick(e){
    console.log('..click');
  }

  _onEnter(e){
    debugger;
    console.log('..enter');
  }


  _onLeave(e){
    console.log( '..leave');
  }

  render() {

      var key = this.props.row + ' - ' + this.props.column;

      return  <Hexagon className='hexagon-sample' key={key} style={{stroke: 'orange', width:'100px'}}
           onClick={() => {console.log("onClick");}}
           flatTop={true}
           hexProps={{
              onMouseEnter: () => {console.log("onMouseEnter: " + key );},
              onMouseLeave: () => {console.log("onMouseLeave: " + key );}
            }} >
            <text x="50%" y="70%" style={{fill: 'black' }} >{key}</text>
          </Hexagon>;
    }
}
