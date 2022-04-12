const {Router}=require("express")
const {getBooks, createBook, updateBook}=require("../controllers/booksController")



const router =Router();

router.route("/books").get(getBooks).post(createBook)

router.put("/books", updateBook)
module.exports=router
