function Author(name,birthyear,nationality){
    this.Name = name,
    this.BirthYear = birthyear,
    this.Nationality = nationality
}
function Book(title,author,genre,price){
    this.Title = title,
    this.Book_Author = author,
    this.Genre = genre,
    this.Price ="₹"+Number(price),
    this.getBookInfo = function(){
        // if (book==this.Title)
        // {
        console.log(`Title:${this.Title},`,this.Book_Author ,`,Genre:${this.Genre}, Price:${this.Price}` );
        // }
        // else
        // {
        //     console.log("Book Not Available");
        // }

    }
}

let author1 = new Author("J.K Rowling",1965,"U.K")
let book1 =new Book("Harry Potter and the Philosopher's Stone",author1,"Fantasy",2000)
book1.getBookInfo()
let author2 = new Author("Chetan Bhagat",1974,"India")
let book2 = new Book("half girfriend",author2,"slice of life",1500)
book2.getBookInfo()
let author3 = new Author("F. Scott Fitzgerald",1896,"U.S")
let book3 = new Book("The Great Gatsby",author3,"Tragedy",3500)
book3.getBookInfo()