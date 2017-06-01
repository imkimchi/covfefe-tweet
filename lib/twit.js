import Twit from 'twit'
import config from '../config'

export default token => {
    return new Twit({
        consumer_key: config.consumerKey,
        consumer_secret: config.consumerSecret,
        access_token: token[0],
        access_token_secret: token[1]
    })
}