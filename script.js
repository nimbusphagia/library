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
}
console.log(addBookToLibrary("asd", "john", "1998"));

//LIBRARY DISPLAY
const bookContainer = document.querySelector(".book-container");

function newBookCell(newBook){
    const div = document.createElement("div");
    div.className = "book";
    bookContainer.appendChild(div);

    const title = document.createElement("p");
    const author = document.createElement("p");
    const published = document.createElement("p");

    title.textContent = newBook.title;
    author.textContent = newBook.author;
    published.textContent = newBook.published;

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(published);
}

const dialogAdd = document.querySelector("dialog")
const btnAdd = document.querySelector(".add");
const form = document.querySelector("form");
const btnClose = document.querySelector(".close");

btnAdd.addEventListener("click", ()=>{dialogAdd.showModal()});

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    const newBook = Object.fromEntries(formData);
    if(newBook.title === "" || newBook.author === ""){
        dialogAdd.close();
    } else{
        myLibrary.push(newBook);
        newBookCell(newBook);
        dialogAdd.close();
    }
    console.log(myLibrary);
});
btnClose.addEventListener("click", ()=>{dialogAdd.close()});




