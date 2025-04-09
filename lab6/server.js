import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

let feedbacks = [
    { id: 1, author: "admin", answer: "text", mark: 3 },
    { id: 2, author: "admin", answer: "text text text text", mark: 2 },
    { id: 3, author: "admin", answer: "aaa bbb ccc ddd eee fff", mark: 5 },
];

const users = [{ id: 1, login: "admin", password: "admin", email: "admin@gmail.com" }];

app.get("/feedbacks", (req, res) => {
    const items = JSON.stringify(feedbacks);
    res.send(items);
});

app.post("/feedbacks", (req, res) => {
    let maxId = 0;
    if (feedbacks.length > 0) {
        maxId = feedbacks[feedbacks.length - 1]["id"];
    }
    const newItem = {
        id: maxId + 1,
        author: req.body.author,
        answer: req.body.answer,
        mark: req.body.mark,
    };
    feedbacks.push(newItem);
});

app.delete("/feedbacks/:id", (req, res) => {
    console.log(req.params);
    feedbacks = feedbacks.filter((el) => {
        return el.id != parseInt(req.params.id);
    });

    res.send(feedbacks);
});

app.post("/register", (req, res) => {
    const user = users.find((el) => el.login == req.body.username);

    if (!user) {
        const newUser = {
            id: users.length + 1,
            login: req.body.username,
            password: req.body.password,
            email: req.body.email
        };
        users.push(newUser);
        res.sendStatus(200);
    } else {
        res.sendStatus(409);
    }
});

app.get("/login/:username", (req, res) => {
    // подразумевается, что логины у всех разные
    const currentUser = users.find((el) => el.login == req.params.username);
    if (currentUser) res.send(JSON.stringify(currentUser[0]));
    else res.sendStatus(409);
});

app.get("/profile/:username", (req, res) => {
    console.log(req.params)
    const currentUser = users.find((el) => el.login == req.params.username);
    res.send(JSON.stringify(currentUser))
})

app.put("/profile", (req, res) => {
    const currentUser = users.find((el) => {
        if(el.id == req.body.id) {
           el.login = req.body.username,
           el.password = req.body.password 
           res.sendStatus(200)
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});