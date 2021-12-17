import { createStore } from 'redux';

// state: 데이터
// action: 데이터에 가해져야 하는 행위
// createStore라는 API를 이용할 때 함수를 넣어주는데 이때 함수를
// reducer라고 함
export default createStore(function(state, action) {
  if (state === undefined) {
    return { number: 0 };
  }

  if (action.type === 'INCREMENT') {
    return {...state, number: state.number + action.size };
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());
