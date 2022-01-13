const btnAdd = document.getElementById("add-btn")
const btnRemoveAll = document.getElementById("remove-btn")
const list = document.getElementById("list-wrapper")


function add() {

    const li = document.createElement("li")

    //span 
    const span = document.createElement("span")
    span.innerHTML = "Hello World"

    //btn delete
    const btnRemove = document.createElement("button")
    btnRemove.innerHTML = "Remove"
    btnRemove.onclick = function () {
        btnRemove.parentNode.remove()
    }

    li.appendChild(span)
    li.appendChild(btnRemove)

    list.appendChild(li)
}

function removeAll() {
    list.innerHTML = ""
}

btnAdd.onclick = add
btnRemoveAll.onclick = removeAll