import React, { Component } from 'react'
import {handleInitialData} from "../actions/shared";
import Dashboard from './Dashboard'
import {connect} from 'react-redux'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <Dashboard/>
      </div>
    )
  }
}

export default connect()(App)