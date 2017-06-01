import {PromiseOAuth as OAuth} from 'oauth-libre'
import config from '../config'

export default new OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    config.consumerKey, config.consumerSecret,
    '1.0', null, 'HMAC-SHA1'
)