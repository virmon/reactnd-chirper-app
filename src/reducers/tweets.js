import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets'

export default function tweets (state = {}, action) {
    switch(action.type) {
        case RECEIVE_TWEETS :
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_TWEET :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true
                        ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
                        : state[action.id].likes.concat([action.authedUser])
                }
            }
        case ADD_TWEET :
            const { tweet } = action

            let replyingTo = {}
            if (tweet.replyingTo !== null) {
                replyingTo = {
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }

            /**
             * Lesson Challenge
             * Suppose we replaced the case ADD_TWEET: portion of the code in 
             * the reducers/tweets file with the code below.
             *  - Would the state change in the same way? Why or why not?
             *  - Would the new tweet appear on the page? Why or why not?
             */
            // let replyingTo = {}
            // if (tweet.replyingTo !== null) {
            //    const allReplies = state[tweet.replyingTo].replies.concat([tweet.id]);
         
            //    return {
            //    ...state,
            //    [action.tweet.id]: action.tweet,
            //    [action.tweet.replyingTo.replies]: allReplies
            //    }
            // }

            return {
                ...state,
                [action.tweet.id]: action.tweet,
                ...replyingTo,
            }
        default :
            return state
    }
}