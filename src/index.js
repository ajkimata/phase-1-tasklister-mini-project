document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTask(e.target.new_task_description.value)
    form.reset()
  })
})
function buildTask(task, priority, additionalInfo){
  console.log(task)
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x'
  p.textContent = `${task} `;
  p.appendChild(btn)

  if (priority === 'high'){
    p.style.color = 'red'
  }else if (priority == 'medium'){
    p.style.color = 'yellow'
  }else {
    p.style.color = 'green'
  }

  if (additionalInfo) {
    let span = document.createElement('span')
    span.textContent = `(${additionalInfo})`
    p.appendChild(span)
  }

  let editBtn = document.createElement('button')
  editBtn.textContent = 'Edit'
  editBtn.addEventListener('click', handleEdit)
  p.appendChild(editBtn)

  document.querySelector('#list').appendChild(p);
 }


 function handleDelete(e){
    e.target.parentNode.remove()
}

function handleEdit(e) {
  let p = e.target.parentNode
  let task = p.firstChild.textContent.trim()
  let priority = p.style.color
  let additionalInfo = ''
  let span = p.querySelector('span')

  if (span) {
    additionalInfo = span.textContent.slice(1, -1)
  }

  let taskInput = document.createElement('input')
  taskInput.type = 'text'
  taskInput.value = task

  let priorityInput = document.createElement('select')
  priorityInput.name = 'priority_level'
  priorityInput.id = 'priority'

  let lowOption = document.createElement('option')
  lowOption.value = 'low'
  lowOption.textContent = 'Low'
  priorityInput.appendChild(lowOption)

  let mediumOption = document.createElement('option')
  mediumOption.value = 'medium'
  mediumOption.textContent = 'Medium'
  priorityInput.appendChild(mediumOption)

  let highOption = document.createElement('option')
  highOption.value = 'high'
  highOption.textContent = 'High'
  priorityInput.appendChild(highOption)
}