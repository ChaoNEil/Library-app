//declare empty array for library
let myLibrary = [];


//object constructor 
function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


//for adding a new book to the array
function addBookToLibrary(title,author,pages,read) {
  let book = new Book(title,author,pages,read);
  myLibrary.push(book);
  displayBooksOnPage();
}

//function to display library array to cards
function displayBooksOnPage(){
  const books = document.querySelector(".books");
  
  const removeDivs = document.querySelectorAll(".card");
  console.log("show me the node cound of current divs..", removeDivs);
  for (let i = 0; i<removeDivs.length; i++){
    removeDivs[i].remove();
  }

  //loop over the library array and display to the cards
  myLibrary.forEach(myLibrary => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);
    for (let key in myLibrary){
      console.log(`${key}: ${myLibrary[key]}`);
      const para = document.createElement("p");
      para.textContent = (`${key}: ${myLibrary[key]}`);
      card.appendChild(para);
    }
  })
}

//event listener for form to add new book to library
const addBookBtn = document.querySelector(".add-book-btn")
addBookBtn.addEventListener("click" , function (){
  document.getElementById("add-book-form").style.display = "";
})

//event listener input to add new data entry to form
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", intakeFormData);

//transform form data to variables for intake
function intakeFormData(){
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  //break out form if data is incomplete or not valid
  if ((title === "") || (author === "") || (pages === "") || (read === "")) {
    return;
  }

  //call function to input the book data to array
  addBookToLibrary(title,author,pages,read);
  
  //reset the form after successful submission
  document.getElementById("add-book").reset();

}

//start event listener for clear form button
const clearButton = document.querySelector(".reset-btn");
clearButton.addEventListener("click", clearForm);

function clearForm(){
  document.getElementById("add-book").reset();
}