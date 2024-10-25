const inputselect = document.getElementById("inputbox");
const listcontainer = document.getElementById("list-container");
function addtask() {
    if (inputselect.value === '') {
        alert("you must write something");
    }
    else {
        let list = document.createElement("li");
        list.innerHTML = inputselect.value;
        listcontainer.appendChild(list);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    inputselect.value = "";
    saveData();
}
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}