
function StudentButton(){
    function  showStudent(name){
        console.log("Студент:", name);
    }

    return (
        <button onClick={
                    ()=>showStudent("Anna")
                }>Показать студента</button>
    )
}

export default StudentButton;