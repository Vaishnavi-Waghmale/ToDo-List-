let input = prompt("What would you like to do?");
const todos = [];
while (input !== "quit" && input !== "q") {
  input = prompt("What would you like to do?");
  if (input === "new") {
    const newtodo = prompt("Add a new Todo");
    todos.push(newtodo);
    console.log(`${newtodo} Added to the list`);
  } else if (input === "list") {
    console.log("**************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i} : ${todos[i]}`);
    }
    console.log("**************");
  } else if (input === "delete") {
    const index = parseInt(prompt("Which index item you want to delete?"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  }
}

console.log("OK, You Quit!");
