import Ora from 'ora'

export default () => {
    let spinner = new Ora({
        text: "We will redirect you to twitter to get PIN code covfefe!",
        spinner: "dots2"
    })

    spinner.start()
    setTimeout(() => {
        spinner.stop()
    }, 2000)
}