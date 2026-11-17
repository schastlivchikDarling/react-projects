function AvailabilityBadge({ copies }) {

    // Определяем наличие экземпляров.
    const isAvailable = copies > 0;

    // Выбираем текст.
    const statusText = isAvailable
        ? "Доступна"
        : "Нет в наличии";

    // Выбираем оформление.
    const statusClass = isAvailable
        ? "availability available"
        : "availability unavailable";

    return (
        <span className={statusClass}>
            {statusText}
        </span>
    );

}

export default AvailabilityBadge;
