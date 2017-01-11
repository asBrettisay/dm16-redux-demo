import React, { Component } from 'react';
import { getWeather } from './redux/weather';
import { connect } from 'react-redux';

class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: null
    }

    getWeather();
  }
  render() {
    return (
      <div>
        <h1>Weather!</h1>
        <p>{this.props.temp}</p>
      </div>
    )
  }

  // componentDidMount() {
  //   axios.get('http://api.openweathermap.org/data/2.5/weather?q=Provo&APPID=58f5ababcd4f471d8cd64b77693b0d15')
  //   .then(res => {
  //     this.setState({
  //       weather: res.data.main.temp
  //     })
  //   })
  // }
}

function mapStateToProps(state) {
  return {
    temp: state.weather.temp
  }
}

export default connect(mapStateToProps)(Weather)