import { combineReducers } from 'redux'
import authedUser from './authedUser'
import receiveUsers from './users'
import tweets from './tweets'

export default combineReducers({
    authedUser,
    receiveUsers,
    tweets
})