import { Link } from "react-router-dom";
import { getBooks } from "../../data/data";
const Books = () => {
  const books = getBooks();
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderLeft: "solid 1px", padding: "1rem" }}>
        <input type="text" placeholder="جستجوی کتاب" />
        {books.map((book) => (
          <Link
            to={`/books/${book.number}`}
            key={book.number}
            style={{ display: "block" }}
          >
            {book.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default Books;
