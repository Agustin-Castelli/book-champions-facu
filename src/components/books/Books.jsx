import BookItem from "../bookItem/BookItem";
import BooksSearch from "../Filter/BooksSearch";

const Books = ({ books, onSearch, onDelete }) => {
  const booksMapped = books.map((book) => (
    <BookItem
      key={book.bookId}
      id={book.bookId}
      title={book.bookTitle}
      author={book.bookAuthor}
      rating={book.bookRating}
      pages={book.pageCount}
      summary={book.summary}
      imageUrl={book.imageUrl}
      onDelete={onDelete}
    />
  ));
  return (
    <>
      <BooksSearch onSearch={onSearch}/>
      <div className="d-flex justify-content-center flex-wrap">
        {booksMapped.length > 0 ?
          booksMapped :
          <p>No se encontraron libros cargados.</p>}
      </div>
    </>
  );
};

export default Books;