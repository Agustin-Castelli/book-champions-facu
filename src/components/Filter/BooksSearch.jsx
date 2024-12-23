import { Form } from "react-bootstrap";
import { useState } from "react";

const BooksSearch = ({ onSearch }) => {

    const [searchBook, setSearchBook] = useState("");

    const searchBookHandler = (event) => {
        setSearchBook(event.target.value);
        onSearch(searchBook);
    }

  return (
    <Form.Group className="mb-3" controlId="searchBook">
      <Form.Control type="text" placeholder="Buscar libro..." onChange={searchBookHandler}/>
    </Form.Group>
  );
};


export default BooksSearch;