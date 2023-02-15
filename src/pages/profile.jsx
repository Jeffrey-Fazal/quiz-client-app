import NavBar from "../common/NavBar";
import NavBarFooter from "../common/NavBarFooter";
import QuizzMaster from "../components/quiz_master";
import Leaderboard from "../components/leaderboard";

const Profile = () => {
    return (
        <div className="outline">
            <NavBar />
            <h1>Profile Page</h1>
            <p>Welcome to the world of Bookquizz, what do you know, show me what you got?</p>
            <p>You get access to a secret quiz</p>
            <QuizzMaster endpoint="controversy" />
            <hr />
            <h2>The LEADERboard</h2>
            <Leaderboard />
            <NavBarFooter />
        </div>
    )
}

export default Profile;