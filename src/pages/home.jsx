import { useState, useEffect } from "react";
import NavBar from "../common/NavBar";
import NavBarFooter from "../common/NavBarFooter";
import '../common/Water.css';
import QuizzAPI from "../components/quiz_api";
import Leaderboard from "../components/leaderboard";


const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(0)
    }, [])
//The next function checks if the current image is the last image in the imgs array. If it is, the function sets the index to 0, which means that the first image in the array will be displayed. If the current image is not the last image in the array, the function increments the index by 1, which means that the next image in the array will be displayed.
    const next = () => {
        if (index === imgs.length -1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }
//The prev function works in a similar way, but in reverse. If the current image is the first image in the imgs array, the function sets the index to the index of the last image in the array, which means that the last image will be displayed. If the current image is not the first image in the array, the function decrements the index by 1, which means that the previous image in the array will be displayed. 
    const prev = () => {
        if (index === 0) {
            setIndex(imgs.length - 1)
        } else {
            setIndex(index - 1)
        }
    }
//Both functions also use the setIndex function, a function that updates the state of the component in which these functions are defined. By calling setIndex with the new index value, the component can update its state and re-render the appropriate image in the slideshow or gallery.

    return ( 
        <div className="slideshow">
            <img className="mainImg" src={imgs[index]} />
            <div className="actions">
                <button onClick={prev}>👈🏽</button>
                <button onClick={next}>👉🏽</button>
            </div>
        </div>
    )
}

function Home ()  {
    return (
        <div>
            <div className="logo">
                <NavBar bar/>
            </div>
            <div className="home">
                    <Slideshow 
                        imgs={[
                        'https://library.ucf.edu/wp-content/uploads/sites/5/2020/01/feb2020-blackhistorymonth-blog.jpg',
                        'https://www.achievementfirst.org/wp-content/uploads/2021/06/Pride-Reading-List-Blog-768x497.png', 
                        'https://www.powells.com/Portals/0/Images/MarchBannedBlog800.jpg',
                        'https://images.booksense.com/images/194/679/9781913679194.jpg',
                        'https://oracle.newpaltz.edu/wp-content/uploads/2019/12/AOTD-2-678x381.png'
                        ]}

                    />
            </div>
            <div className="nav">
            <h2>Random Quiz</h2>
            <QuizzAPI />
            <h2>Sign up and join the Leaderboard</h2>
            <Leaderboard />
            <NavBarFooter />
            </div>
        </div>
    )
};
export default Home;