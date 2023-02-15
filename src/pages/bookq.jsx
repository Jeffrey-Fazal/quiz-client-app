import NavBar from "../common/NavBar";
import NavBarFooter from "../common/NavBarFooter";
import QuizzMaster from "../components/quiz_master";


const BookQuiz = () => {
    return (
        <div className="outline">
            <NavBar />
            <h1>Book Quiz</h1>
            <h4>Show off your inner nerd and knowledge of books</h4>
            <QuizzMaster endpoint="books" />
            <NavBarFooter />
        </div>
    )
}

export default BookQuiz;