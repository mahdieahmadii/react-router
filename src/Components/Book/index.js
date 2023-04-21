import { useNavigate, useParams, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "../../data/data";

const Book = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const book = getBook(parseInt(params.bookId));

  {
    if (book) {
      return (
        <main style={{ padding: "1rem" }}>
          <h2>قیمت کل : {`${book.amount} تومان`}</h2>
          <p>{book.name}</p>
          <p>تاریخ انتشار : {book.due}</p>
          <button
            onClick={() => {
              deleteBook(book.number);
              navigate("/books" + location.search);
            }}
          >
            حذف کتاب
          </button>
        </main>
      );
    } else {
      return (
        <main style={{ padding: "1rem" }}>
          <h2>این کتاب موجود نیست</h2>
        </main>
      );
    }
  }
};
export default Book;
