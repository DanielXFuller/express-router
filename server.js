const express = require("express")
const app = express()
const port = 3000

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

app.use("/users", usersRouter);
app.use("/fruits", fruitsRouter);




// POST /users
usersRouter.post("/", (req, res) => {

});

// PUT /users/:id
usersRouter.put("/:id", (req, res) => {
  const id = req.params.id;

});

// DELETE /users/:id
usersRouter.delete("/:id", (req, res) => {
  const id = req.params.id;

});




// POST /fruits
fruitsRouter.post("/", (req, res) => {

});

// PUT /fruits/:id
fruitsRouter.put("/:id", (req, res) => {
  const id = req.params.id;

});

// DELETE /fruits/:id
fruitsRouter.delete("/:id", (req, res) => {
  const id = req.params.id;

});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
