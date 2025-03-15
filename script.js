class Book {
    constructor(title, author, year, index){
        this.title = title;
        this.author = author;
        this.year = year;
        this.index = index;
    }
}
class Library {
    constructor(){
        //LIBRARY ARRAY
        this.books = [];
        this.newBook("Los Detectives Salvajes", "Roberto Bolaño", 1998, +this.books.length);
        this.displayBook("Los Detectives Salvajes", "Roberto Bolaño", 1998, this.books.length - 1);
    }
    newBook(title, author, year, index){
        //ADD NEW BOOK TO LIBRARY
        let book = new Book(title, author, year, index);
        this.books.push(book);
    }
    displayForm(){
        //OPEN DIALOG
        const promptBtn = document.querySelector(".add");
        const dialog = document.querySelector("dialog");
        const closeBtn = document.querySelector(".close");
        promptBtn.addEventListener("click", ()=>{dialog.showModal()});
        closeBtn.addEventListener("click", ()=>{dialog.close()});
    }
    bookInput(){
        //INPUT BOOK AND DISPLAY IT
        const submitBtn = document.querySelector(".btnContainer > button");
        submitBtn.addEventListener("click",()=>{
            let title = document.querySelector("#title").value;
            let author = document.querySelector("#author").value;
            let year = document.querySelector("#year").value;
            if( title === ""|| author === ""|| year === ""){
                document.querySelector("dialog").close();
            } else{
                this.newBook(title, author, +year, +this.books.length);//CREATE
                this.keepCount();
                this.displayBook(title, author, year, this.books.length - 1);//DISPLAY
                document.querySelector("dialog").close();
            }  
        });
    }
    displayBook(title, author, year, index){
        // DOM
        const bookContainer = document.querySelector(".book-container");
        const div = document.createElement("div");
        div.className = "book";
        div.id = index; // FOR BOOK VALIDATION
        bookContainer.appendChild(div);

        const pTitle = document.createElement("p");
        const pAuthor = document.createElement("p");
        const pYear = document.createElement("p");
        const btnDel = document.createElement("p");
        const btnRead = document.createElement("button");
        btnRead.className = "read";
        btnRead.id = "unread";
        btnDel.className = "delete";

        pTitle.textContent = title;
        pAuthor.textContent = author;
        pYear.textContent = year;
        btnDel.textContent = "×";

        div.append(pTitle, pAuthor, pYear, btnDel, btnRead);
    }
    alterDisplay(){
        document.body.addEventListener("click", (e)=>{
            if(e.target.className == "delete"){
                //FIND IN THE ARRAY
                let bookIndex = this.books.findIndex((book)=> book.index == e.target.parentElement.id);
                //DELETE IT
                this.books.splice(bookIndex, 1);
                e.target.parentElement.remove();
                this.keepCount();
            }
            //TOGGLE READ BUTTON
            if(e.target.id === "read"){
                e.target.style.background = "url(./icons/grayBook.svg)";
                e.target.setAttribute("title", "Mark as read");
                e.target.id = "unread";
            } else if(e.target.id == "unread"){
                e.target.style.background = "url(./icons/blackBook.svg)";
                e.target.setAttribute("title", "Mark as unread");
                e.target.id = "read";
            }
        })
    }
    keepCount(){
        document.querySelector(".counter").innerHTML = this.books.length;
    }
}

const library = new Library();
library.displayForm();
library.bookInput();
library.alterDisplay();





