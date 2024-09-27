function toDoTask() {
    var myTask = document.getElementById('myTask');
    var myTaskList = document.getElementById('myTaskList');

    if (!myTask.value.trim()) {
        return alert("Todo can't be empty!")
    }

    var li = document.createElement('li');
    li.textContent = myTask.value;

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function () {
        myTaskList.removeChild(li);
    };

   


}