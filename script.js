let myLibrary = [];

function Book(title,author,pages,read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  // do stuff here
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title,author,pages,read)
  console.log(newBook);
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