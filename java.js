document.getElementById("add-btn").addEventListener("click", newItem);

function newItem() {
  const inputItem = document.getElementById("input-item").value;

  let li = document.createElement("li");
  let deleteButton = document.createElement("button");
  let item = document.createTextNode(inputItem);
  deleteButton.innerHTML = "Delete";

  li.appendChild(item);
  document.getElementById("task-table").appendChild(li);
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    li.remove();
    deleteButton.remove();
  });
}

deleteButton.addEventListener("click", function () {
  item.remove();
});
