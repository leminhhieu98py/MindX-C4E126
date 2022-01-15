const list = document.querySelector('#book-list ul');
const search = document.querySelector('#search-books')
const forms = document.forms;

//search
search.addEventListener('submit', function (event) {
  event.preventDefault()
  const searchInput = document.querySelector('#search-books input')
  const searchValue = searchInput.value
  console.log(searchValue)
})

// edit books
// bubble
list.addEventListener('click', (e) => {
  if (e.target.className == 'edit') {
    const li = e.target.parentElement;

    //change content
    const task = prompt("Nhập vào công việc cần làm mới")
    li.querySelector('.name').innerHTML = task
    // console.log(spanName)
  }
});

// delete books
list.addEventListener('click', (e) => {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');
  const editBtn = document.createElement('span');

  // add text content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';
  editBtn.textContent = 'edit';

  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');
  editBtn.classList.add('edit');

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  list.appendChild(li);
});


const booksArr = ["book1", "book2", "book 3", "book 1"]

function addBook(string) {
  booksArr.push(string)
  displayBooks(booksArr)
}

function deleteBook(index) {
  booksArr.splice(index, 1)
  displayBooks(booksArr)
}

function displayBooks(arr) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    const editBtn = document.createElement('span');

    // add text content
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';
    editBtn.textContent = 'edit';

    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    editBtn.classList.add('edit');

    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
  }
}

displayBooks(booksArr)


btnDelete.addEventListener("submit", function () {
  console.log(2)
})

btnDelete.onclick = function () {
  console.log(2)
}