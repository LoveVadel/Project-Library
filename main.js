const myLibrary = [];

//constructor function for creating book objects
function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const form = document.querySelector("form");
const bookName = document.querySelector("#book-name")
const bookAuthor = document.querySelector("#book-author")
const bookPages = document.querySelector("#book-pages")
const bookStatus = document.querySelector("#book-status")

form.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON"){
        event.preventDefault(); // prevent the form from submitting to the server
       
        if(bookName.value !== "" && bookAuthor.value !== "" && bookPages.value !== "" ){
            const newBook = new Book(bookName.value, bookAuthor.value, bookPages.value, bookStatus.value);
            myLibrary.push(newBook);

            const bookContainer = document.querySelector(".book-container");
            bookContainer.textContent = " ";
            
            /*the below code is responsible for create the book div that displays on the page. i created all the element that i styled with css*/
            myLibrary.forEach(function(book, index){
                const p1_book =  document.createElement("p").textContent = "Book Name:";
                const h4_book = document.createElement("h4");
            
                const p1_author =  document.createElement("p").textContent = "Author:";
                const h4_author = document.createElement("h4");
            
                const p1_pages =  document.createElement("p").textContent = "Pages:";
                const h4_pages = document.createElement("h4");
            
                const h4_status = document.createElement("h4");
                h4_status.setAttribute("class", "info-status");
            
                const deleteButton = document.createElement("button");
                deleteButton.setAttribute("class", "delete-button");
                deleteButton.textContent = "Delete Book";
                deleteButton.setAttribute("data-index", index)
            
                const hr = document.createElement("hr");
                const hr1 = document.createElement("hr")
                const hr2 = document.createElement("hr")
            
                h4_book.textContent = book.title;
                h4_author.textContent = book.author;
                h4_pages.textContent = book.pages;

                const infoStatus = document.createElement("div");
                infoStatus.setAttribute("id", "info-status");
                if(book.status === "read"){
                    h4_status.innerHTML = "Read &#10003"
                }
                else{
                    h4_status.innerHTML = "Not Read &#10006"
                    infoStatus.style.backgroundColor = "brown"
                }

                const infoBook = document.createElement("div");
                infoBook.setAttribute("id", "info-book")
            
                const infoAuthor = document.createElement("div");
                infoAuthor.setAttribute("id", "info-author");
            
                const infoPages = document.createElement("div");
                infoPages.setAttribute("id", "info-pages")
            
            
                const infoDelete = document.createElement("div");
                infoDelete.setAttribute("class", "info-delete");
            
                const books = document.createElement("div");
                books.setAttribute("class", "book");
            
                infoBook.append(p1_book, h4_book);
                infoAuthor.append(p1_author, h4_author);
                infoPages.append(p1_pages, h4_pages);
                infoStatus.append(h4_status)
                infoDelete.append(deleteButton);
            
                books.append(infoBook, hr, infoAuthor, hr1, infoPages, hr2, infoStatus, infoDelete);
            
                bookContainer.appendChild(books)
            
            })
            form.style.display = ""
            bookName.value = "";
            bookAuthor.value = "";
            bookPages.value = "";
        }
    }
})


/*the code below is responsible for the delete book button. the button deletes the book from both the user interface and the myLibrary array and then refresh and update the user interface*/
document.querySelector(".book-container").addEventListener("click", function(event){
    if(event.target.getAttribute("class") === "delete-button"){
        const getIndex = event.target.getAttribute("data-index");
        myLibrary.splice(getIndex, 1);
        
      const bookContainer =  document.querySelector(".book-container");
      bookContainer.textContent = " ";

      myLibrary.forEach(function(book, index){

        const p1_book =  document.createElement("p").textContent = "Book Name:";
        const h4_book = document.createElement("h4");
      
        const p1_author =  document.createElement("p").textContent = "Author:";
        const h4_author = document.createElement("h4");
      
        const p1_pages =  document.createElement("p").textContent = "Pages";
        const h4_pages = document.createElement("h4");
      
        const h4_status = document.createElement("h4");
       
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete-button");
        deleteButton.textContent = "Delete Book";
        deleteButton.setAttribute("data-index", index)
      
        const hr = document.createElement("hr");
        const hr1 = document.createElement("hr")
        const hr2 = document.createElement("hr")
      
        h4_book.textContent = book.title;
        h4_author.textContent = book.author;
        h4_pages.textContent = book.pages;
        
        const infoStatus = document.createElement("div");
        infoStatus.setAttribute("id", "info-status");
        if(book.status === "read"){
            h4_status.innerHTML = "Read &#10003"
        }
        else{
            h4_status.innerHTML = "Not Read &#10006"
            infoStatus.style.backgroundColor = "red"
        }
      
        const infoBook = document.createElement("div");
        infoBook.setAttribute("id", "info-book")
      
        const infoAuthor = document.createElement("div");
        infoAuthor.setAttribute("id", "info-author");
      
        const infoPages = document.createElement("div");
        infoPages.setAttribute("id", "info-pages")
    
        const infoDelete = document.createElement("div");
        infoDelete.setAttribute("class", "info-delete");
      
        const bookContainer = document.querySelector(".book-container");
        const books = document.createElement("div");
        books.setAttribute("class", "book");
      
        infoBook.append(p1_book, h4_book);
        infoAuthor.append(p1_author, h4_author);
        infoPages.append(p1_pages, h4_pages);
        infoStatus.append(h4_status)
        infoDelete.append(deleteButton);
      
        books.append(infoBook, hr, infoAuthor, hr1, infoPages, hr2, infoStatus, infoDelete);
      
        bookContainer.appendChild(books)
      
      })
    }

    else if(event.target.getAttribute("class") === "info-status"){
        // i will write the code for the read/not read status here to toggle between the two, also update the user interface and book object to the new status
        
    }
})

/*the below code is responsible for the hide/display of the form by adding a click event to the add new book button*/
const addNewBook = document.querySelector("#new-book");
addNewBook.addEventListener("click", function(){
    if(form.style.display === ""){
        form.style.display = "flex"; //change display of the form to flex in css
    }
    else{
        form.style.display = ""; // change the display of the form to none in css
    }
})









