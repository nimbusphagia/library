//LIBRARY LOGIC
const myLibrary = [{title:"Los Detectives Salvajes", author:"Roberto Bolaño", published:"1998"}];

function Book() {

}

//LIBRARY DISPLAY FROM THE ARRAY
const bookContainer = document.querySelector(".book-container");
const dialogAdd = document.querySelector("dialog")
const btnPrompt = document.querySelector(".add");
const form = document.querySelector("form");
const btnClose = document.querySelector(".close");
const counter = document.querySelector(".counter");

function newBookCell(newBook){
    const div = document.createElement("div");
    div.className = "book";
    bookContainer.appendChild(div);

    const title = document.createElement("p");
    const author = document.createElement("p");
    const published = document.createElement("p");
    const btnDel = document.createElement("p");
    btnDel.className = "delete";

    title.textContent = newBook.title;
    author.textContent = newBook.author;
    published.textContent = newBook.published;
    btnDel.textContent = "×";
    btnDel.id = myLibrary.length - 1;

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(published);
    div.appendChild(btnDel);
}

function displayLibrary(library){
    if((library.length - 1) >= 0 && (library.length - 2) >= 0){
        const newItem = library[library.length - 1];
        const lastItem = library[library.length - 2];
        if(lastItem !== newItem){
            newBookCell(newItem);
         }
    } 
}

btnPrompt.addEventListener("click", ()=>{dialogAdd.showModal()});
btnClose.addEventListener("click", ()=>{dialogAdd.close()});

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    const newBook = Object.fromEntries(formData);
    if(newBook.title === "" || newBook.author === ""){
        dialogAdd.close();
    } else{
        myLibrary.push(newBook);
        displayLibrary(myLibrary);
        keepCount();
        dialogAdd.close();
    }
});
function keepCount(){
    counter.innerHTML = myLibrary.length;
}

//DELETE BOOK
//let tracker = 1000;

document.body.addEventListener("click", (e)=>{
    let tracker = "default";
    let bookArr = [];
    if(e.target.className == "delete"){
        tracker = e.target.id;
        myLibrary.splice(e.target.id, 1);
        e.target.parentElement.remove();
        keepCount(myLibrary);
        bookArr = Array.from(document.querySelectorAll(".delete"));
        if(tracker !== "default"){
            for(const del of bookArr){
                if(del.id > tracker){
                    del.id--;
                    console.log(bookArr);
                }
            }
        }
    }
})













