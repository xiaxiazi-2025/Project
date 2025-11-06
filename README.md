const fs = require('fs').promises; // 异步文件操作
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // 用于生成唯一ID（需要安装）

// 数据存储路径
const TODO_FILE_PATH = path.join(__dirname, 'todos.json');

// 初始化数据文件（如果不存在则创建）
async function initTodoFile() {
  try {
    await fs.access(TODO_FILE_PATH); // 检查文件是否存在
  } catch {
    // 文件不存在时创建并写入空数组
    await fs.writeFile(TODO_FILE_PATH, JSON.stringify([], null, 2));
  }
}

// 读取所有待办事项
async function getTodos() {
  await initTodoFile(); // 确保文件存在
  const data = await fs.readFile(TODO_FILE_PATH, 'utf8');
  return JSON.parse(data);
}

// 保存待办事项到文件
async function saveTodos(todos) {
  await fs.writeFile(TODO_FILE_PATH, JSON.stringify(todos, null, 2));
}

// 添加新待办事项
async function addTodo(content) {
  const todos = await getTodos();
  const newTodo = {
    id: uuidv4(), // 唯一ID
    content: content, // 待办内容
    completed: false, // 是否完成
    createdAt: new Date().toISOString() // 创建时间
  };
  todos.push(newTodo);
  await saveTodos(todos);
  return newTodo;
}

// 标记待办事项为已完成
async function completeTodo(id) {
  const todos = await getTodos();
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    throw new Error('待办事项不存在');
  }
  todo.completed = true;
  await saveTodos(todos);
  return todo;
}

// 删除待办事项
async function deleteTodo(id) {
  const todos = await getTodos();
  const initialLength = todos.length;
  const filteredTodos = todos.filter(t => t.id !== id);
  
  if (filteredTodos.length === initialLength) {
    throw new Error('待办事项不存在');
  }
  
  await saveTodos(filteredTodos);
  return true;
}

// 导出模块方法
module.exports = {
  getTodos,
  addTodo,
  completeTodo,
  deleteTodo
};
