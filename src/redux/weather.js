import axios from 'axios';

const initialState = {
  temp: 0
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case 'ADD_WEATHER':
   
      return Object.assign({}, state, {temp: action.payload})
    default:
      return state;
  }
}

export function addWeatherAction(temp) {
  return {
    type: 'ADD_WEATHER',
    payload: temp
  }
}

export function getWeather(dispatch) {
  axios.get('http://api.openweathermap.org/data/2.5/weather?q=Provo&APPID=58f5ababcd4f471d8cd64b77693b0d15')
  .then(res => {
    dispatch(addWeatherAction(res.data.main.temp))
  })
}