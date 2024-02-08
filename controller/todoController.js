const Todo = require("../modal/Todo")

exports.getTodos = async (req, res) => {
    try {
        const result = await Todo.find(req.body)
        res.status(200).json({ message: "fecth sucess", result })
    } catch (error) {
        res.status(500).json({ message: error.message || "someting went to wrong" })

    }
}
exports.addTodos = async (req, res) => {
    try {

        await Todo.create(req.body)
        res.status(201).json({ message: "fecth add sucess" })
    } catch (error) {
        res.status(500).json({ message: error.message || "someting went to wrong" })

    }
}
exports.updateTodos = async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(req.params.id.req.body)
        res.status(200).json({ message: "fecth update sucess" })
    } catch (error) {
        res.status(500).json({ message: error.message || "someting went to wrong" })

    }
}
exports.deleteTodos = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "fecth delete sucess" })
    } catch (error) {
        res.status(500).json({ message: error.message || "someting went to wrong" })

    }
}