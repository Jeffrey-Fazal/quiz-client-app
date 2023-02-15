import NavBar from "../common/NavBar";
import NavBarFooter from "../common/NavBarFooter";
import QuizzQuestions from "../components/quizz_module";
// import "../common/Water.css"

const BookQuiz = () => {
    return (
        <div className="outline">
            <NavBar />
            <h1>Book Quiz</h1>
            <h4>Show off your inner nerd and knowledge of books</h4>
            <QuizzQuestions endpoint="books"/>
            <NavBarFooter />
        </div>
    )
}

export default BookQuiz;