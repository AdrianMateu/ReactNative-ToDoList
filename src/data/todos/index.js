import { v1 as uuidv1 } from "uuid";

const delay = ms => new Promise(res => setTimeout(res, ms));

const v1options = {
	node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
	clockseq: 0x1234
};

const getTodos = async () => {
	await delay(2000);
	return [
		newTodo({ text: "Tarea 2", done: false, priority: 2 }),
		newTodo({ text: "Tarea 3", done: false, priority: 2 }),
		newTodo({ text: "Tarea 1", done: false, priority: 2 }),
		newTodo({ text: "Tarea 4", done: true, priority: 2 }),
		newTodo({ text: "Tarea 5", done: false, priority: 2 }),
		newTodo({ text: "Tarea 6", done: false, priority: 2 }),
		newTodo({ text: "Tarea 7", done: false, priority: 2 }),
		newTodo({ text: "Tarea 8", done: false, priority: 2 }),
		newTodo({ text: "Tarea 9", done: true, priority: 2 }),
		newTodo({ text: "Tarea 10", done: true, priority: 2 }),
		newTodo({ text: "Tarea 11", done: true, priority: 2 }),
		newTodo({ text: "Tarea 12", done: true, priority: 2 })
	];
};

const newTodo = todo => ({
	id: uuidv1(v1options),
	text: todo.text,
	createdAt: new Date(),
	done: todo.done,
	priority: todo.priority
});

const updateTodo = (list, todo) => {
	const updateIndex = list.findIndex(t => t.id === todo.id);
	const newTodoList = [...list];
	newTodoList[updateIndex] = todo;
	return newTodoList;
};

const addTodo = (list, todo) => [...(list || []), newTodo(todo)];

const deleteTodo = (list, todo) => list.filter(t => t.id !== todo.id);

export { getTodos, addTodo, updateTodo, deleteTodo };
