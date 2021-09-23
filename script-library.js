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

    console.log(myLibrary);
    document.querySelector(".user-input").reset();
    
};

document.getElementById('submit').addEventListener('click', addBook);


function domCreateTile() {
    const bookSection = document.querySelector(".book-section");
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");
    bookSection.appendChild(bookContainer);
    
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








//stops NULL if no read status selected - NEEDS TO BE FIXED
function readStatus(){
    let readChecked = document.querySelector('input[class="read"]:checked').value
    if (readChecked == null) {
        return readChecked = "";
    } else {
        return readChecked;
    }
}

