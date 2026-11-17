import BookCard from "./BookCard.jsx";

function BookList({ books, genre }) {

    // По умолчанию используем все книги.
    let filteredBooks = books;

    // Если указан жанр, выполняем фильтрацию.
    if (genre !== "Все жанры") {

        filteredBooks = books.filter((book) => {
            return book.genre === genre;
        });

    }

    // Если после фильтрации массив пуст.
    if (filteredBooks.length === 0) {

        return (
            <p className="empty-message">
                В выбранной категории книги отсутствуют.
            </p>
        );

    }

    // Отображаем отобранные книги.
    return (
        <div className="book-list">

            {filteredBooks.map((book) => (

                <BookCard
                    key={book.id}
                    book={book}
                />

            ))}

        </div>
    );

}

export default BookList;
