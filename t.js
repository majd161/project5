class Books{
    costantructor(id,name,title){
        this.id=id
        this.name=name
        this.title= title
    }}

let mynewbook=new Books()

let books = [
    {"id":1,name:"book number 1","title":"black october"},
    {"id":1,name:"book number 1","title":"black october"},
    {"id":1,name:"book number 1","title":"black october"},
]
function addNewBook(id, name, ttle ){ 
    const newbook = new Books (id, name, title)
    books.push({"id":newbook.id,"title":newbook.title,"name":newbook.name})
 }
  addNewBook("1","math", "green" )
  books.find((book)=>book.id)
  console.log(books)
function updateBook(){}
function getbook(){}
``
 


 
