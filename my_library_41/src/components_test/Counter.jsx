function Counter() {
    let count = 0;

    function increment() {
        count = count + 1;
        console.log("Новое значение:", count);
    }

    return (
        <div>
        <h2>
            Счетчик : {count}
        </h2>

        <button onClick = {increment}>
        Увеличить
        </button>

    </div>
    );
}

export default Counter;

``` +
React вызывает Counter()
|
v
let count = 0
    |
    v
Создаётся JSX
|
v
На странице count = 0
    |
    v
Пользователь нажал
кнопку
|
v
count = count + 1
    |
    v
Переменная стала 1
|
v
React не получил сигнал
обновить интерфейс
|
v
На странице осталось 0
```
