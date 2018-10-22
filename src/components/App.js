import React, { Component , Fragment} from 'react'
import {handleInitialData} from "../actions/shared";
import Dashboard from './Dashboard'
import TweetPage from './TweetPage'
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
           {/* <NewTweet/>*/}

          {
              this.props.loading === true
                    ? null
                    :  <TweetPage match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}}/>
          }
      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)