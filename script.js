//LIBRARY 
const myLibrary = [{title:"Los Detectives Salvajes", author:"Roberto Bolaño", published:"1998"}];

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
    const btnRead = document.createElement("button");
    btnRead.className = "read";
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
    div.appendChild(btnRead);
}

function displayLibrary(library){
    const newItem = library[library.length - 1];
    newBookCell(newItem);
}
//ADD BOOK
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

//COUNT
function keepCount(){
    counter.innerHTML = myLibrary.length;
}

//DELETE BOOK

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
//READ TOGGLE

document.body.addEventListener("click", (e)=>{
    if(e.target.className == "read"){
        let idTrack = e.target.parentElement.querySelector(".delete");
        if(myLibrary[idTrack.id].read == true){
            myLibrary[idTrack.id].read = false;
            e.target.style.background = "url(./icons/book_4_spark_24dp_999999_FILL0_wght400_GRAD0_opsz24.svg)";
            e.target.setAttribute("title", "Mark as read");
        } else{
            e.target.style.background = "url(././icons/off1.svg)";
            myLibrary[idTrack.id].read = true;
            e.target.setAttribute("title", "Mark as unread");
        }
        console.log(myLibrary[idTrack.id]);
    }
})












