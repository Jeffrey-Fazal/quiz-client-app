import NavBar from "../common/NavBar";
import NavBarFooter from "../common/NavBarFooter";
import QuizzMaster from "../components/quiz_master"

const ButterFlyQuizz = () => {
    return (
        <div className="outline">
            <NavBar />


                <h1>Butterfly Quiz</h1>
                <p>Who doesn't like the most beautiful insect that literally transforms itself during its life.</p>
                <hr />
                <QuizzMaster endpoint="butterflies" />

                
            <NavBarFooter />
        </div>
    )
}

export default ButterFlyQuizz;