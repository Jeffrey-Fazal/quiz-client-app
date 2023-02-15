import NavBar from "../common/NavBar";
import NavBarFooter from "../common/NavBarFooter";
import Leaderboard from "../components/leaderboard"

const Home = () => {
    return (
        <div className="outline">
            <NavBar />
            <h1>Home</h1>
            <h2>The leaderboard</h2>
            <Leaderboard />
            <p>Sign in and join the quizz of learning</p>
            <NavBarFooter />
        </div>
    )
}

export default Home;