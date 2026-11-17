import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import LibraryStats from "./components/LibraryStats.jsx";
import BookList from "./components/BookList.jsx";

import { books } from "./data/books.js";

import "./App.css";

function App() {

  // Общее количество наименований.
  const totalBooks = books.length;

  // Количество доступных наименований.
  const availableBooks = books.filter((book) => {
    return book.copies > 0;
  }).length;

  return (
      <div className="app">

            <Header />

            <main className="main">

                <LibraryStats
                    totalBooks={totalBooks}
                    availableBooks={availableBooks}
                />

                <h2>Полный каталог</h2>

                <BookList
                    books={books}
                    genre="Все жанры"
                />

                <h2>Художественная литература</h2>

                <BookList
                    books={books}
                    genre="Художественная литература"
                />

                <h2>Учебная литература</h2>

                <BookList
                    books={books}
                    genre="Учебная литература"
                />

                <h2>Детская литература</h2>

                <BookList
                    books={books}
                    genre="Детская литература"
                />

                <h2>Публицистика</h2>

                <BookList
                    books={books}
                    genre="Публицистика"
                />

                <h2>Научно-популярная литература</h2>

                <BookList
                    books={books}
                    genre="Научно-популярная литература"
                />

            </main>

            <Footer />

        </div>
  );

}

export default App;
