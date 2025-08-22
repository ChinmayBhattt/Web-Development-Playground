// https://mongoosejs.com/docs/guide.html
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";

let conn = await mongoose.connect('mongodb://localhost:27017/Todo')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({ title: 1, desc: "Discription of Todo", isDone: false , days: 3})
    todo.save()
    res.send("Hello world")
})

app.get('/a', async(req, res) => {
 let todo = await Todo.findOne({})
   console.log(todo)
   res.json({title: todo.title, desc: todo.desc})
})

app.listen(port, () => {
    console.log(`${port}`)
})