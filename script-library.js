//INPUT INFO FOR BOOK ---------------------------------------------------

document.getElementById('button-book').addEventListener('click', () => {
    document.querySelector(".user-input").hidden = false;
}, true);

//ADDS BOOK TO LIBRARY-----------------------------------------------

let myLibrary = [];

//puts the user input into an object in myLIbrary
const addBook = (event) => {

   event.preventDefault(); //stop form submitting

    let Book = function() {
        this.title = document.getElementById("title").value,
        this.author = document.getElementById("author").value,
        this.length = document.getElementById("length").value,
        this.read = readStatus(event)
    }

    //creates new book tile
    Book.prototype.addTile = () => {
        domCreateTile(event);
    }

    myLibrary = new Book();

    myLibrary.addTile();

    resetForm()
    
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
    bookInfo.textContent = myLibrary.title;
    bookContent.appendChild(bookInfo);

    bookInfo = document.createElement("li");
    bookInfo.classList.add("book-info");
    bookInfo.textContent = myLibrary.author;
    bookContent.appendChild(bookInfo);

    bookInfo = document.createElement("li");
    bookInfo.classList.add("book-info");
    bookInfo.textContent = myLibrary.length;
    bookContent.appendChild(bookInfo);

    bookInfo = document.createElement("li");
    bookInfo.classList.add("book-info");
    bookInfo.textContent = myLibrary.read;
    bookContent.appendChild(bookInfo);
}

function resetForm() {
    const userInput = document.querySelector(".user-input")
    userInput.reset();
    userInput.hidden = true;
}

document.querySelector('.book-section').addEventListener('click', (event) => {
    deleteBook(event);
    
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





//stops NULL if no read status selected - NEEDS TO BE FIXED

function readStatus(){
    let readChecked = document.querySelector('input[class="read"]:checked').value
    if (readChecked == null) {
        return readChecked = "";
    } else {
        return readChecked;
    }
}

