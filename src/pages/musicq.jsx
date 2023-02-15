import NavBar from "../common/NavBar";
import NavBarFooter from "../common/NavBarFooter";
import QuizzCategory from "../components/quizz_category";

const MusicQuiz = () => {
    return (
        <div className="outline">
            <NavBar />
            <h1>Music Quiz</h1>
            <p>Did you know that 87.64% of the world listen to music? <br />
            Show us what you got!</p>
            <QuizzCategory endpoint="music"/>
            <NavBarFooter />
        </div>
    )
}

export default MusicQuiz;