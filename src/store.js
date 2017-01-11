import {combineReducers, createStore} from 'redux';

import todos from './redux/todos';
import weather from './redux/weather';

const reducer = combineReducers({
  todos: todos,
  weather: weather
});

export default createStore(reducer);