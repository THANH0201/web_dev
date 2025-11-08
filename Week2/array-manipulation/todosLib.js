//The data model for each todo will follow this structure:
//{
//    "task": "Buy groceries",
//    "completed": false,
//    "dueDate": "2025-08-30"
//}
let taskArray = [];
let nextId = 1;

//Create Element:
function addOne(task, completed = false, dueDate = null) {
    // Check if task parameter is empty or undefined
    if (!task) {
        return false;
    }

    const newTask = {
        id: nextId++,
        task,
        completed,
        dueDate
    };

    taskArray.push(newTask);
    return newTask;
}
//Read All Elements:
function getAll() {
    return taskArray;
}

if (require.main === module) {
    console.log("getAll called:", getAll());
}

//Read an Element by ID:

function findById(id) {
    const numericId = Number(id); // Converts the ID to a number
    const task = taskArray.find(item => item.id === numericId); // Finds the task with the matching ID
    return task || false; // Returns the task or false if not found
}

//Update an Element by ID:
function updateOneById(id, updatedData) {
    const task = findById(id);
    if (task) {
        // Update properties only if they are provided in updatedData
        if (updatedData.task) task.task = updatedData.task;
        if (updatedData.completed !== undefined) task.completed = updatedData.completed;
        if (updatedData.dueDate) task.dueDate = updatedData.dueDate;
        return task; // Returns the updated task object
    }
    return false; // Returns false if the task with the provided ID is not found
}
//Delete an Element by ID:
function deleteOneById(id) {
    const task = findById(id);
    if (task) {
        taskArray = taskArray.filter(item => item.id !== id);
        return task;
    }
    return false;
}
//Testing the Module:
if (require.main === module) {
    // Add tasks
    let result = addOne("Buy groceries", false, "2025-08-30");
    console.log(result);
    result = addOne("Clean car", "true", "2025-08-25");
    console.log(result);
    result = addOne("Run 100 km", "false", "2025-08-26");
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { completed: true, dueDate: "2025-08-31" }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}
//Exporting functions
const ToDos = {
    getAll,
    addOne,
    findById,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;