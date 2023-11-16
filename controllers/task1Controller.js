import data from '../data.js'

const task1Handle = (req, res, next) => {
    const emotions = data.emotions
    res.render("task1", { emotions })
}

export default {task1Handle}