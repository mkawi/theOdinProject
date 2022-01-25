const container = document.querySelector(".container");
const addBookBtn = document.querySelector("#add-btn");

let myLibrary = [
	{
		title: "Lord Of The Rings",
		author: "Tolkien",
		pages: 500,
		read: true,
	},
	{
		title: "Harry Potter",
		author: "J.K.Rowling",
		pages: 600,
		read: false,
	},
];

function Book(title, author, pages, read, id) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.id = id;
}

function createCardElement(book) {
	let div = document.createElement("div");
	div.className = "card";
	div.id = `${book.title[0]}-${book.author[0]}-${book.pages}`;
	div.innerHTML = `
        <h6>Title</h6>
        <h3>${book.title}</h3>
        <h6>Author</h6>
        <h3>${book.author}</h3>
        <h6>Pages</h6>
        <h3>${book.pages}</h3>
        <h6>Read this book?</h6>
        <input type="checkbox" name="book-read" ${book.read ? "checked" : ""}>
        <button value="Remove" class="remove">Remove</button>
    `;
	container.appendChild(div);
}

function addBookToLibrary() {
	const title = document.getElementById("book-title").value;
	const author = document.getElementById("book-author").value;
	const pages = document.getElementById("book-pages").value;
	const read = document.getElementById("book-read").checked;
	const id = `${title[0]}-${author[0]}-${pages}`;
	const bookObject = new Book(title, author, pages, read, id);
	myLibrary.push(bookObject);

	createCardElement(bookObject);

	document.querySelector(`#${id} button`).addEventListener("click", () => {
		removeBookFromLibrary(id);
	});
}

function removeBookFromLibrary(id) {
	const el = document.querySelector(`#${id}`);
	el.parentNode.removeChild(el);
}

function initBooks() {
	myLibrary.forEach((book) => {
		createCardElement(book);
	});
}

initBooks();

addBookBtn.addEventListener("click", addBookToLibrary);
document.querySelectorAll(".remove").forEach((btn) => {
	btn.addEventListener("click", () => {
		removeBookFromLibrary(btn.parentNode.id);
	});
});
