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

let users = [
  {
    id: 1,
    login: "admin",
    password: "admin",
    email: "admin@gmail.com",
    role: "admin",
    isBlocked: false,
  },
];

let blackList = [];

app.get("/feedbacks", (req, res) => {
  const items = JSON.stringify(feedbacks);
  res.send(items);
});

app.get("/users", (req, res) => {
  const items = JSON.stringify(users);
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
  feedbacks = feedbacks.filter((el) => {
    return el.id != parseInt(req.params.id);
  });

  res.send(feedbacks);
});

app.delete("/users/:id", (req, res) => {
  users = users.filter((el) => {
    return el.id != parseInt(req.params.id);
  });

  res.send(users);
});

app.post("/register", (req, res) => {
  const user = users.find((el) => el.login == req.body.username);

  if (!user) {
    const newUser = {
      id: users.length + 1,
      login: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: "user",
      isBlocked: false,
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
  const blackListNames = blackList.map((el) => el.login);
  if (currentUser && !blackListNames.includes(req.params.username))
    res.send(JSON.stringify(currentUser[0]));
  else res.sendStatus(409);
});

app.get("/profile/:username", (req, res) => {
  1;
  const currentUser = users.find((el) => el.login == req.params.username);
  res.send(JSON.stringify(currentUser));
});

app.put("/profile", (req, res) => {
  const currentUser = users.find((el) => {
    if (el.id == req.body.id) {
      (el.login = req.body.username),
        (el.password = req.body.password),
        (el.email = req.body.email);
      res.sendStatus(200);
    }
  });
});

app.post("/blockUser/:id", (req, res) => {
    console.log(req.body)
  const currentUser = users.find((el) => el.id == req.params.id);
  currentUser.isBlocked = true;
  blackList.push(currentUser);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
