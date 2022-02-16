document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    editMyTodos(e.target['new-task-description'].value, e.target.priorities.value);
    form.reset();
  });
});

function editMyTodos(task, priority) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteTask);
  btn.textContent = 'X';
  p.textContent = `${task} `;
  p.style.color = `${priority}`;
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);

}

function deleteTask(e) {
  e.target.parentNode.remove()
}
