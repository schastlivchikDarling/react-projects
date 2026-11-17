function LibraryStats({ totalBooks, availableBooks }) {

    return (
        <div className="library-stats">

            <div className="stat-box">

                <h3>Всего книг в каталоге</h3>

                <p>{totalBooks}</p>

            </div>

            <div className="stat-box">

                <h3>Доступны для выдачи</h3>

                <p>{availableBooks}</p>

            </div>

        </div>
    );

}

export default LibraryStats;
