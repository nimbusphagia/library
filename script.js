//LIBRARY LOGIC
const myLibrary = [
    {title: "1q84", author: "Haruki Murakami", published: "2009"},
    {title: "Sputnik Sweetheart", author: "Haruki Murakami", published: "1999"},
];

function Book() {

}

function addBookToLibrary(title, author, published) {
    let newBook = {
        title: title,
        author: author,
        published: published
    }
    myLibrary.push(newBook);
    console.log(myLibrary);
}
console.log(addBookToLibrary("asd", "john", "1998"));

//LIBRARY DISPLAY
const bookContainer = document.querySelector(".book-container");

function displayBook(books){
    for (const book of books){
        const div = document.createElement("div");
        div.className = "book";
        const title = document.createElement("p")
        const author = document.createElement("p");
        const published = document.createElement("p");
        title.textContent = book.title;
        author.textContent = book.author;
        published.textContent = book.published;

        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(published);
    }
}
console.log(displayBook(myLibrary));

