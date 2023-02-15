import { useState, useEffect } from "react";
import NavBar from "../common/NavBar";
import NavBarFooter from "../common/NavBarFooter";
import '../common/Water.css';

// const Thumbnail = ({arr, image, index}) => {
//     console.log(image);
//     return (
//         <div className="thumbnail">
//             {arr.map((imgsrc, i) => (
//                 <img 
//                 key={i} 
//                 height="50" 
//                 src={imgsrc} 
//                 onClick={() => image(i)}
//                 className={index === i ? 'active' : '' }
//                 />
//             ))}
//         </div>
//     )
// }

const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(0)
    }, [])
////////////////////////////
    const next = () => {
        if (index === imgs.length -1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }
//////////////////////////
    const prev = () => {
        if (index === 0) {
            setIndex(imgs.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return ( 
        <div className="slideshow">
            <img className="mainImg" src={imgs[index]} />
            <div className="actions">
                <button onClick={prev}>👈🏽</button>
                <button onClick={next}>👉🏽</button>
            </div>
            {/* <Thumbnail arr={imgs} image={setIndex} index={index} /> */}
        </div>
    )
}

function Home ()  {
    return (
        <div>
            <div className="logo">
                <NavBar bar/>
            </div>
            <div className="Home">
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
            <NavBarFooter />
            </div>
        </div>
    )
};
export default Home;