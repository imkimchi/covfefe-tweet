import "babel-polyfill"

import question from './question'
import inquirer from 'inquirer'
import chalk from 'chalk'

export default async () => {
    console.log(chalk.cyan("✔") + chalk.gray(' Successfully logged in to twitter!\n'))
    return await inquirer.prompt(question[1])
}
