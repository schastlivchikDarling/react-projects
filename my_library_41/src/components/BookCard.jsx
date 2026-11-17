import Card from "./Card.jsx";
import AvailabilityBadge from "./AvailabilityBadge.jsx";

function BookCard({ book }) {

    return (
        <Card>

            <div className="book-header">

                <h3>{book.title}</h3>

                <AvailabilityBadge copies={book.copies} />

            </div>

            <p>
                Автор: {book.author}
            </p>

            <p>
                Год издания: {book.year}
            </p>

            <p>
                Жанр: {book.genre}
            </p>

            <p>
                Доступных экземпляров: {book.copies}
            </p>

            {book.year < 2000 && (
                <p className="classic-label">
                    Классическое издание
                </p>
            )}

        </Card>
    );

}

export default BookCard;
