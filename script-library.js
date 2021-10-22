//INPUT INFO FOR BOOK ---------------------------------------------------

document.getElementById('button-book').addEventListener('click', () => {
    document.querySelector(".user-input").hidden = false;
}, true);

let myLibrary = [];
let newBook;

let Book = function() {
    this.title = document.getElementById("title").value,
    this.author = document.getElementById("author").value,
    this.length = document.getElementById("length").value,
    this.read = document.querySelector('input[class="read"]:checked').value
}

//ADDS BOOK TO LIBRARY-----------------------------------------------

//puts the user input into an object in myLIbrary
const addBook = (event) => {

   event.preventDefault(); //stop form submitting

    //creates new book tile
    Book.prototype.addTile = () => {
        domCreateTile(event);
    }

    newBook = new Book();

    newBook.addTile();

    myLibrary.push(newBook); 

    resetForm();

    setData(); 
    
};

document.getElementById('submit').addEventListener('click', addBook);


function domCreateTile() {
    const addButton = document.getElementById("button-book");

    const bookSection = document.querySelector(".book-section");
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");
    bookSection.insertBefore(bookContainer, addButton); 

    const deleteBook = document.createElement("button");
    deleteBook.classList.add("delete-book");
    deleteBook.textContent = "X";
    bookContainer.appendChild(deleteBook);

    const bookContent = document.createElement("ul");
    bookContent.classList.add("book-content");
    bookContainer.appendChild(bookContent);

    let bookInfo = document.createElement("li");
    bookInfo.classList.add("book-info");
    bookInfo.textContent = newBook.title;
    bookContent.appendChild(bookInfo);

    bookInfo = document.createElement("li");
    bookInfo.classList.add("book-info");
    bookInfo.textContent = newBook.author;
    bookContent.appendChild(bookInfo);

    bookInfo = document.createElement("li");
    bookInfo.classList.add("book-info");
    bookInfo.textContent = newBook.length;
    bookContent.appendChild(bookInfo);

    readButton = document.createElement("button");
    readButton.classList.add("book-info");
    readButton.setAttribute("id", "info-read")
    readButton.textContent = newBook.read;
    bookContent.appendChild(readButton);
}

function resetForm() {
    const userInput = document.querySelector(".user-input")
    userInput.reset();
    userInput.hidden = true;
}

document.querySelector('.book-section').addEventListener('click', (event) => {
    deleteBook(event);
    toggleRead(event);
});


//Delete DOM book element
function deleteBook(event) {
    if (event.target.tagName === "BUTTON") {
        const button = event.target;
        const bookCont = button.parentNode;
        const bookSect = bookCont.parentNode;
        if (button.textContent === "X") {
            bookSect.removeChild(bookCont);
        }
    }
}

function toggleRead(event) {
    if (event.target.id === "info-read") {
        myLibrary.read = !myLibrary.read;

        if (myLibrary.read === false) {
            readButton.textContent = "Not Read";
            readButton.style.backgroundColor = "#e04f63";
        }else {
            readButton.textContent = "Read";
            readButton.style.backgroundColor = "#63da63";
        }
        bookContent.appendChild(readButton); 
    }
}


// setting Library to be stored in local storage
const setData = () => {
    localStorage.setItem("library", JSON.stringify(myLibrary));
}


  
const getData = () => {
    myLibrary = JSON.parse(localStorage.getItem("library"));
    console.log(myLibrary);
}


if(!localStorage.getItem("library")) {
    setData();
  } else {
    getData();
    render();
  }

  function render() {
    myLibrary.forEach((book) => {
        makeBook(book);
    });
  }

  function makeBook(book) {
    const addButton = document.getElementById("button-book");

    const bookSection = document.querySelector(".book-section");
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");
    bookSection.insertBefore(bookContainer, addButton); 

    const deleteBook = document.createElement("button");
    deleteBook.classList.add("delete-book");
    deleteBook.textContent = "X";
    bookContainer.appendChild(deleteBook);

    const bookContent = document.createElement("ul");
    bookContent.classList.add("book-content");
    bookContainer.appendChild(bookContent);

    let bookInfo = document.createElement("li");
    bookInfo.classList.add("book-info");
    bookInfo.textContent = book.title;
    bookContent.appendChild(bookInfo);

    bookInfo = document.createElement("li");
    bookInfo.classList.add("book-info");
    bookInfo.textContent = book.author;
    bookContent.appendChild(bookInfo);

    bookInfo = document.createElement("li");
    bookInfo.classList.add("book-info");
    bookInfo.textContent = book.length;
    bookContent.appendChild(bookInfo);

    readButton = document.createElement("button");
    readButton.classList.add("book-info");
    readButton.setAttribute("id", "info-read")
    readButton.textContent = book.read;
    bookContent.appendChild(readButton);
}