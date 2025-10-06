const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const undoneList = document.getElementById("undoneList");
const doneList = document.getElementById("doneList");


function addTask(text, isDone) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isDone;
  const label = document.createElement("label");
  label.textContent = text;

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      doneList.appendChild(li);
    } else {
      undoneList.appendChild(li);
    }
  });

  li.appendChild(checkbox);
  li.appendChild(label);

  if (isDone) {
    doneList.appendChild(li);
  } else {
    undoneList.appendChild(li);
  }
}
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      addTask(text, false);
      input.value = "";
    });
