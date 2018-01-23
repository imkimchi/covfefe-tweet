import {PromiseOAuth as OAuth} from 'oauth-libre'
import config from '../config'

export default new OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'v5r8VRuG0pg7xjv9nRZ4KP5m9', 'KtcSwaIIfu1lRBQFUUYssDzqtdGAUrcOc7t4x1SLzV2NETUSRb',
    '1.0', null, 'HMAC-SHA1'
)