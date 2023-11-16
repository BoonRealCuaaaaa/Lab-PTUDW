import data from '../data.js'
const show = (req, res, next) => {
    console.log("HEHE")
    const zodiacs = data.zodiacs
    res.render("task4", { zodiacs })
}
const showDetail = (req, res, next) => {
    const name = req.params.name
    const zodiacs = data.zodiacs
    const target = zodiacs.find(item => { return item.name == name })
    res.render("task4-detail",{target})
}

export default { show, showDetail }