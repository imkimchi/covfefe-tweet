import inquirer from 'inquirer'
import covfefe from 'covfefe'
import figlet from 'figlet'
import chalk from 'chalk'
import opn from 'opn'

import generateTwit from './lib/twit'
import question from './lib/question'
import Spinner from './lib/spinner'
import client from './lib/oauth'

let authURL = "https://api.twitter.com/oauth/authenticate?oauth_token=";
const log = console.log;

(async function donaldTrump () {
    console.log(chalk.cyan(figlet.textSync('covfefe', {horizontalLayout: 'full'})))
    //Spinner()

    let oauth_token = await client.getOAuthRequestToken()
    setTimeout(() => { opn(authURL+oauth_token[0]) }, 1300)
    let answer = await inquirer.prompt(question)
    let access_token

    try {
        access_token = await client.getOAuthAccessToken(oauth_token[0], oauth_token[1], answer.pin)
    } catch (e) {
        console.log("Sorry, PIN number is wrong")
        process.exit(0)
    }

    try {
        let T = await generateTwit(access_token)
        let covfefedText = covfefe(answer.status)
        let result = await T.post('statuses/update', {status: covfefedText})
        let userInfo = result.data.user
        
        log(chalk.bold("\nJust sent the tweet!  ") + chalk.cyan(`${userInfo.name}: "${result.data.text}"`))
        log(chalk.gray(`https://twitter.com/${userInfo.screen_name}/status/${result.data.id_str}`))
        process.exit(0)
    } catch (e) {
        console.error("Failed to update your status: ", e)
        process.exit(0)
    }
})()