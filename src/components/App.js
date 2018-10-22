import React, { Component , Fragment} from 'react'
import {handleInitialData} from "../actions/shared";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import TweetPage from './TweetPage'
import NewTweet from './NewTweet'
import {connect} from 'react-redux'
import Nav from './Nav'

import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
            <LoadingBar/>
            <div className='container'>
                <Nav/>
                {
                    this.props.loading === true
                        ? null
                        :  <div>
                            <Route path='/' exact component={Dashboard} />
                            <Route path='/tweet/:id' component={TweetPage} />
                            <Route path='/new' component={NewTweet} />
                        </div>
                }
            </div>
        </Fragment>

      </Router>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)