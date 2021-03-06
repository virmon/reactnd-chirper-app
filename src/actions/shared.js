import { getInitialData } from '../utils/api'
import { receiveTweets } from '../actions/tweets'
import { receiveUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_USER = 'tylermcginnis'

/** 
 * thunk action creator
 * Gets data from database and then dispatches actions to the 
 * store to set the three pieces of state we have in our store
 * */
export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ tweets, users }) => {
                dispatch(receiveTweets(tweets))
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_USER))
                dispatch(hideLoading())
            })
    }
}