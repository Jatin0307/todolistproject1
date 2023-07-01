// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const li = document.createElement('li');
    li.innerText = taskText;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

// Event listener for add button click
addButton.addEventListener('click', addTask);

// Event listener for enter key press in task input
taskInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
