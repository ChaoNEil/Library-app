let myLibrary = [];

function Book(title,author,pages,read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}


function render(){
  let libraryElement = document.getElementById("library");
  libraryElement.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.innerHTML = `<p>${book.title}</p>`
    libraryElement.appendChild(bookElement);
  }
}

function addBookToLibrary() {
  // do stuff here
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title,author,pages,read)
  myLibrary.push(newBook);
  render();
}


let newBookbtn = document.getElementById("add-book-btn");
newBookbtn.addEventListener("click", function() {
  let newBookForm = document.getElementById("new-book-form");
  console.log(newBookForm);
  newBookForm.style.display = "block";
})

document.getElementById("new-book-form").addEventListener("submit", function(event){
  event.preventDefault();
  addBookToLibrary();
})