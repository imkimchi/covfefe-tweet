#!/usr/bin/env node

import covfefe from 'covfefe'
import figlet from 'figlet'
import chalk from 'chalk'
import fs from 'fs-extra'

import tokenExists from './lib/tokenExist'
import makeNewToken from './lib/newtoken'
import generateTwit from './lib/twit'

const log = console.log;
const isNewLogin = () => fs.pathExists('./data.json')

async function donaldTrump () {
    log(chalk.cyan(figlet.textSync('covfefe', {horizontalLayout: 'full'})))
    let answer = await isNewLogin() ? await tokenExists() : await makeNewToken()
    let access_token = await fs.readJson('./data.json')

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
}

donaldTrump()