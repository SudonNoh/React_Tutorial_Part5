import React, { Component } from 'react';
import store from '../store';

export default class DisplayNumber extends Component {
  // 강의에서는 아래와 같이 했지만 경고 메세지가 나타나 componentDidMount로 실행
  // constructor(props) {
  //   super(props);

  //   store.subscribe(
  //     function() {
  //       this.setState({ number: store.getState().number });
  //     }.bind(this)
  //   );
  // }

  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.props.number} readOnly></input>
        {this.props.unit}
      </div>
    );
  }
}
