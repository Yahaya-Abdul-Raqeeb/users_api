const books=require("../data/books")

const booksHandlers ={};
booksHandlers.byCategory =(req, res, next)=>{
const category=req.query.category;
if(category){
    let _books =books.filter((b)=>b.category ==category);
    return res.status(200).json({success:true, data:_books})
}

}

booksHandlers.byAuthor =(req, res, next)=>{
const author=req.query.author;
if(author){
    let _books =books.filter((b)=>b.author ==author);
    return res.status(200).json({success:true, data:_books})
}

} 
module.exports=booksHandlers