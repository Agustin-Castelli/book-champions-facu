import { useState } from "react";
import Books from "../books/Books"
import NewBook from "../newBook/NewBook";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BOOKS = [
    {
      bookId: 1,
      bookTitle: "100 años de soledad",
      bookAuthor: "Gabriel García Marquez",
      bookRating: Array(5).fill("*"),
      summary: "Entre la boda de José Arcadio Buendía con Amelia Iguarán hasta la maldición de Aureliano Babilonia transcurre todo un siglo. Cien años de soledad para una estirpe única, fantástica, capaz de fundar una ciudad tan especial como Macondo y de engendrar niños con cola de cerdo.",

      pageCount: 410,
      imageUrl:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
    },
    {
      bookId: 2,
      bookTitle: "Asesinato en el Orient Express",
      bookAuthor: "Agatha Christie",
      bookRating: Array(4).fill("*"),
      summary: "En un lugar aislado de la antigua Yugoslavia, en plena madrugada, una fuerte tormenta de nieve obstaculiza la línea férrea por donde circula el Orient Express. Procedente de la exótica Estambul, en él viaja el detective Hércules Poirot, que repentinamente se topa con uno de los casos más desconcertantes de su carrera: en el compartimiento vecino ha sido asesinado Samuel E. Ratchett mientras dormía, pese a que ningún indicio trasluce un móvil concreto. Poirot aprovechará la situación para indagar entre los ocupantes del vagón, que a todas luces deberían ser los únicos posibles autores del crimen.",

      pageCount: 256,
      imageUrl:
        "https://m.media-amazon.com/images/I/71RFyM95qwL._AC_UF1000,1000_QL80.jpg",
    },
    {
      bookId: 3,
      bookTitle: "Las dos torres",
      bookAuthor: "J.R.R Tolkien",
      bookRating: Array(5).fill("*"),
      summary: "La Compañía se ha disuelto y sus integrantes emprenden caminos separados. Frodo y Sam avanzan solos en su viaje a lo largo del río Anduin, perseguidos por la sombra misteriosa de un ser extraño que también ambiciona la posesión del Anillo. Mientras, hombres, elfos y enanos se preparan para la batalla final contra las fuerzas del Señor del Mal",

      pageCount: 352,
      imageUrl:
        "https://m.media-amazon.com/images/I/A1y0jd28riL._AC_UF1000,1000_QL80.jpg",
    },
    {
      bookId: 4,
      bookTitle: "50 sombras de Grey",
      bookAuthor: "E.L James",
      bookRating: Array(1).fill("*"),
      summary: "Cincuenta sombras de Grey es un libro de E.L. James que cuenta la historia de Anastasia Steele, una estudiante de literatura de 21 años, y Christian Grey, un empresario millonario. Anastasia es asignada para entrevistar a Christian para el periódico universitario, y queda impresionada por su atractivo y su misterio. Sin embargo, también encuentra a Christian intimidante, y decide romper con él debido a sus peculiares prácticas eróticas y sus oscuros secretos",
      pageCount: 514,
      imageUrl:
        "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
    },
  ];

  const Dashboard = ({ isLoggedIn, setIsLoggedIn }) => {
    const [books, setBooks] = useState(BOOKS);

    const navigate = useNavigate();

    const addBookHandler = (newBook) => {
        const bookData = { ...newBook, bookId: Math.random() };
        setBooks([bookData, ...books]);
    };

    const searchHandler = (searchInput) => {
        if (searchInput === "") {
        setBooks(books);
        }

        const searchInputUpperCase = searchInput.toUpperCase();
        const booksSearched = books.filter((book) =>
        book.bookTitle.toUpperCase().includes(searchInputUpperCase)
        );
        setBooks(booksSearched);
    };

    const delBook = (id) => {
        setBooks(books.filter((book) => book.bookId !== id));
    };

    const logOutHandler = () => {
        setIsLoggedIn(!isLoggedIn)
        navigate("/login")
    };

    return(
        <>
            <div className="d-flex justify-content-end">
                <Button className="mx-3 my-4" onClick={logOutHandler}>Cerrar Sesión</Button>
            </div>
            <div className="d-flex flex-column align-items-center">
                <h2>¡Bienvenidos a Books Champion!</h2>
                <p>¡Quiero leer libros!</p>
                <NewBook onAddBook={addBookHandler} />
                <Books books={books} onSearch={searchHandler} onDelete={delBook} />
            </div>
        </>
    )
  };

  export default Dashboard;