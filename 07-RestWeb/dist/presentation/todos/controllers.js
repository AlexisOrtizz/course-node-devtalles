"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const postgres_1 = require("../../data/postgres");
class TodosController {
    constructor() { }
    getTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield postgres_1.prisma.todo.findMany();
            res.json(todos);
        });
    }
    getTodoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id)) {
                res.status(404).json({ error: 'Argument is not a number.' });
                return;
            }
            const todo = yield postgres_1.prisma.todo.findFirst({
                where: { id }
            });
            if (!todo) {
                res.status(404).json({ error: `Todo with id ${id} not found.` });
                return;
            }
            res.json(todo);
        });
    }
    createTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { text } = req.body;
            if (!text) {
                res.status(400).json({ error: 'Text property is required.' });
                return;
            }
            const todo = yield postgres_1.prisma.todo.create({
                data: { text }
            });
            res.status(201).json(todo);
        });
    }
    updateTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id)) {
                res.status(404).json({ error: 'ID argument is not a number.' });
                return;
            }
            const todo = yield postgres_1.prisma.todo.findFirst({
                where: { id }
            });
            if (!todo) {
                res.status(404).json({ error: `Todo with id ${id} not found.` });
                return;
            }
            const { text, completedAt } = req.body;
            const updatedTodo = yield postgres_1.prisma.todo.update({
                where: { id },
                data: {
                    text,
                    completedAt: (completedAt) ? new Date(completedAt) : null
                }
            });
            res.json(updatedTodo);
        });
    }
    deleteTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id)) {
                res.status(404).json({ error: 'ID argument is not a number.' });
                return;
            }
            const todo = yield postgres_1.prisma.todo.findFirst({
                where: { id }
            });
            if (!todo) {
                res.status(404).json({ error: `Todo with id ${id} not found.` });
                return;
            }
            const deletedTodo = yield postgres_1.prisma.todo.delete({
                where: { id }
            });
            if (deletedTodo) {
                res.status(204).json(deletedTodo);
            }
            else {
                res.status(400).json({ error: `Todo with id ${id} not found.` });
            }
        });
    }
}
exports.TodosController = TodosController;
