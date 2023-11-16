import data from '../data.js'
const show = (req, res, next) => {
    const id = req.params.id ? parseFloat(req.params.id) : undefined

    let products = data.products
    const categories = data.categories
    console.log(id)
    if (id == undefined) {
        res.render('task3', { products, categories })
    } else {
        products=products.filter(item => {
            return item.category == id
        })
        console.log(products)
        res.render("task3", { products, categories })
    }
}

export default { show }