import NavBar from "../common/NavBar";
import NavBarFooter from "../common/NavBarFooter";
import QuizzQuestions from "../components/quizz_module";

const BookQuiz = () => {
    return (
        <div className="outline">
            <NavBar />
            <h1>Book Quiz</h1>
            <p>Show off your inner nerd and knowledge of books</p>
            <QuizzQuestions />
            <NavBarFooter />
        </div>
    )
}

export default BookQuiz;