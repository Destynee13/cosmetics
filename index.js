import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { fileURLToPath } from "url";
import path from "path";


const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/welcome", (req, res) => {
    res.render("brightening.ejs");
});

app.get("/payment", (req, res) => {
    res.render("payment.ejs");
});

app.get("/FAQs", (req, res) => {
    res.render("soaps.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})