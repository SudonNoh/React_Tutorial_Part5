import AddNumber from '../components/AddNumber';
import React, { Component } from 'react';
import store from '../store';

export default class extends Component {
  render() {
    return (
      <AddNumber
        // 추가되는 size 값은 원래 파일인 AddNumber에서 넘어오는 size 값
        onClick={function(size) {
          store.dispatch({ type: 'INCREMENT', size: size });
        }.bind(this)}
      ></AddNumber>
    );
  }
}
