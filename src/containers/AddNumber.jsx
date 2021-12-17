import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';
import store from '../store';

// 위 함수는 dispatch를 아래와 같이 실행시켜줌
function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function(size) {
      // store.dispatch > dispatch로 됨
      dispatch({ type: 'INCREMENT', size: size });
    },
  };
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);
/*
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
*/
