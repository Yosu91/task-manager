const fs = require("fs");

const file = "tasks.txt";

// Agregar una tarea
function addTask(task) {
  fs.appendFileSync(file, task + "\n");
  console.log("✅ Tarea agregada:", task);
}

// Listar tareas
function listTasks() {
  if (!fs.existsSync(file)) {
    console.log("📂 No hay tareas.");
    return;
  }
  const tasks = fs.readFileSync(file, "utf-8").split("\n").filter(Boolean);
  console.log("📌 Tareas:");
  tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
}

// Eliminar todas las tareas
function clearTasks() {
  fs.writeFileSync(file, "");
  console.log("🗑️ Todas las tareas fueron eliminadas.");
}

// Comandos desde la terminal
const [,, command, ...args] = process.argv;
if (command === "add") {
  addTask(args.join(" "));
} else if (command === "list") {
  listTasks();
} else if (command === "clear") {
  clearTasks();
} else {
  console.log("🚀 Comandos disponibles: add <tarea>, list, clear");
}
