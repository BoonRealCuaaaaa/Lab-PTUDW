const show = (req, res, next) => {
    const salary = req.query.salary ? parseFloat(req.query.salary) : 0
    const jar55=salary*55/100
    const jar10=salary/10
    const jar5=salary*5/100;
    res.render("task2",{jar55,jar10,jar5})
}

export default { show }