const express = require("express")
const app = express()
const port = 3000
const bodyParser = require('body-parser');

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

// Express Routes

const usersRouter = require("./routes/users");
const fruitsRouter = require("./routes/fruits");
app.use(bodyParser.json());

app.use("/users", usersRouter);
app.use("/fruits", fruitsRouter);




// POST /users
usersRouter.post("/", (req, res) => {
    const newUser = req.body;
    if (newUser && newUser.name && newUser.age) { // check if the request body contains valid user data
        users.push(newUser);
        res.json(users);
    } else {
        res.status(400).json({ error: "Invalid user data" });
    }
});


// PUT /users/:id
usersRouter.put("/:id", (req, res) => {
    const id = parseInt(req.params.id) - 1; // subtract 1 to account for the offset
    users[id] = { name: "John Doe", age: 32 };
    res.json(users);
});

// DELETE /users/:id
usersRouter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = id - 1;
    if (index >= 0 && index < users.length) {
      users.splice(index, 1);
      res.json(users);
    } else {
      res.status(404).send(`User with ID ${id} not found!`);
    }
});




// POST /fruits
fruitsRouter.post("/", (req, res) => {
    const newFruit = req.body;
    if (newFruit && newFruit.name && newFruit.age) { 
        fruits.push(newFruit);
        res.json(fruits);
    } else {
        res.status(400).json({ error: "Invalid fruit data" });
    }
});

// PUT /fruits/:id
fruitsRouter.put("/:id", (req, res) => {
    const id = parseInt(req.params.id) - 1; // subtract 1 to account for the offset
    fruits[id] = { name: "Apple", color: "Red" };
    res.json(fruits);
});

// DELETE /fruits/:id
fruitsRouter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = id - 1;
    if (index >= 0 && index < fruits.length) {
      fruits.splice(index, 1);
      res.json(fruits);
    } else {
      res.status(404).send(`Fruit with ID ${id} not found!`);
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
