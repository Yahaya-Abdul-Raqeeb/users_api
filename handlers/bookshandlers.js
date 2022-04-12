const fs =require("fs")

let books =[];
fs.readFile(".../data/books", (err, data)=>{
if (err) throw err;
books.JSON.parse(data);

})

const booksHandlers ={};
booksHandlers.byCategory =(req, res, next)=>{
const category=req.query.category;
if(category){
    let _books =books.filter((b)=>b.category ==category);
    return res.status(200).json({success:true, data:_books})
}

}
const booksHandlers ={};
booksHandlers.byAuthor =(req, res, next)=>{
const author=req.query.author;
if(author){
    let _books =books.filter((b)=>b.author ==author);
    return res.status(200).json({success:true, data:_books})
}

}