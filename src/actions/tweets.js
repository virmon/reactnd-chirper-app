export const RECEIVE_DATA = 'RECEIVE_DATA'

export function receiveTweets (tweets) {
    return {
        type: RECEIVE_DATA,
        tweets,
    }
}