import inquirer from 'inquirer'
import fs from 'fs-extra'
import opn from 'opn'

import question from './question'
import client from './oauth'

let authURL = "https://api.twitter.com/oauth/authenticate?oauth_token=";

export default async () => {
    let oauth_token = await client.getOAuthRequestToken()
    console.log("It will redirect you to twitter to get PIN...")
    setTimeout(() => { opn(authURL+oauth_token[0]) }, 1500)
    let answer = await inquirer.prompt(question)
    let fixedPath = __dirname + '/../data.json'
    try {
        let access_token = await client.getOAuthAccessToken(oauth_token[0], oauth_token[1], answer.pin)
        await fs.writeJson(fixedPath, access_token)
        return answer
    } catch (e) {
        console.log("Sorry, PIN number is wrong", e)
        process.exit(0)
    }
}