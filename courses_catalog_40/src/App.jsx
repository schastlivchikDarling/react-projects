import Header  from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CourseList from "./components/CourseList.jsx";
import {courses} from "./data/courses.js";
import "./App.css";

function App() {
  return (
      <div className="app">
        <Header/>
        <main className="main">
          <h2>  Учебные курсы</h2>
          <p className="courses-count"> Всего курсов: {courses.length}</p>
          <CourseList courses={courses} />
        </main>
        <Footer/>
      </div>
  );
}
export default App;