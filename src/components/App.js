import React, { Component , Fragment} from 'react'
import {handleInitialData} from "../actions/shared";
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import {connect} from 'react-redux'

import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>

          <LoadingBar/>
            {/*<Dashboard/>*/}
            <NewTweet/>

      </div>
    )
  }
}

export default connect()(App)