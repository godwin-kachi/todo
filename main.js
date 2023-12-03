window.addEventListener("load", () => {
  const form = document.querySelector("#actions");
  const task = document.getElementById("_what");
  const todo_items = document.querySelector("#items");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const activity = task.value;

    if (!activity) {
      alert("Please enter a task");
      return;
    }

    const list_holder = document.createElement("div");
    list_holder.classList.add("lists");

    const list_item = document.createElement("div");
    list_item.classList.add("list-items");

    const text_entry = document.createElement("input");
    text_entry.classList.add("entry");
    text_entry.type = "text";
    text_entry.value = activity;
    text_entry.setAttribute("readonly", "readonly");

    const controls = document.createElement("div");
    controls.classList.add("controls");

    const editbtn = document.createElement("button");
    editbtn.classList.add("edit");
    editbtn.innerText = "Edit";

    const del_btn = document.createElement("button");
    del_btn.classList.add("delete");
    del_btn.innerText = "Delete";

    todo_items.appendChild(list_holder);
    list_holder.appendChild(list_item);
    list_item.appendChild(text_entry);
    list_holder.appendChild(controls);
    controls.appendChild(editbtn);
    controls.appendChild(del_btn);

    task.value = "";
    

    editbtn.addEventListener("click", () => {
      if (editbtn.innerText.toLowerCase() == "edit") {
        text_entry.removeAttribute("readonly");
        text_entry.focus();
        editbtn.innerText = "Save";
      } else {
        text_entry.setAttribute("readonly", "readonly");
        editbtn.innerText = "Edit";
      }
    });
    del_btn.addEventListener("click", () => {
      list_holder.remove();
    });
  });
});
