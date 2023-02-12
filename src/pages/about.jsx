import NavBar from "../common/NavBar";
import NavBarFooter from "../common/NavBarFooter";

const About = () => {
    return (
        <div>
            <NavBar />
            <h1>About</h1>
            <p>We are a team of developers who've created Bookquiz for your enjoyment. Intrested in the code? Visit:</p>
            <ul>
                <li><a href="https://github.com/Jeffrey-Fazal/quiz-client-app">Front End Github</a></li>
                <li><a href="https://github.com/Jeffrey-Fazal/quizz-server-app">Back End Github</a></li>
            </ul>
            <NavBarFooter />
        </div>
    )
}

export default About;