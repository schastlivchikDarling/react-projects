function EventExample(){
    function handleClick(event){
        console.log("Тип события:", event.type);
        console.log("Элемент currentTarget :", event.currentTarget);
        console.log("Элемент Target :", event.target);
    }

    return (
     <button onClick={handleClick}>Нажми <span>меня</span></button>

    )

}
export default EventExample;

// event.type - тип события
// even.currentTarget - элемент к которому привязан обработчик
// even.target - элемент на котором произошло событие