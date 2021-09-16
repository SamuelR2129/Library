let myLibrary = [];

const addBook = (event) => {
    event.preventDefault(); //stop form submitting
    let book = {
        title : document.getElementById("title").value,
        author : document.getElementById("author").value,
        length : document.getElementById("length").value, 
        read : document.getElementsByClassName("read").value
    
    }
    myLibrary.push(book);
    console.log(myLibrary[0]);
};

document.getElementById('submit').addEventListener('click', addBook);

/* function Book(title, author, length, status){
    this.title = title,
    this.author = author
    this.length = length,
    this.status = status
}

//myLibrary = new Book("Harry Potter", "JK ROwling", "300", "READ")

*/