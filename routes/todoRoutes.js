const { getTodos, addTodos, updateTodos, deleteTodos } = require("../controller/todoController")

const router = require("express").Router()

router.get("/todo", getTodos)
router.post("/add-todo", addTodos)
router.put("/update-todo/:id", updateTodos)
router.delete("/update-todo/:id", deleteTodos)

module.exports = router