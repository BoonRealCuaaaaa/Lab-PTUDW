import express from 'express'
import expressHbs from 'express-handlebars'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import data from './data.js'
import task1Route from './routes/task1Route.js'
import task2Route from './routes/task2Route.js'
import task3Route from './routes/task3Route.js'
import task4Route from './routes/task4Route.js'

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(__dirname + '/html'));
app.engine('hbs',
    expressHbs.engine({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        extname: "hbs",
        defaultLayout: "layout"
    }))
app.set("view engine", "hbs")

app.use("/task1", task1Route)
app.use("/task2", task2Route)
app.use("/task3", task3Route)
app.use("/task4",task4Route)

app.get("/", (req, res, next) => {
    res.render("index")
})

app.get("/task2", (req, res, next) => {
    res.render("task2",)
})

app.listen(3000 || process.env.PORT);

