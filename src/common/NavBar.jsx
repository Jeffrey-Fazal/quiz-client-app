import React from "react"; 
import './Water.css';

const NavBar = () => {
    return (
        <nav>
            <h3>
                <div className="logo">
                    <a href ="/">
                        <img src ="logo.png">
                        </img>
                    </a>
                </div>
            </h3>     
                <a href="/"> Home</a> |
                <a href="/bookq"> Book Quizz</a> |
                <a href="/butterflyq"> Butterfly Quizz</a> |
                <a href="/musicq"> Music Quizz</a> |
                <a href="/login">The Secret</a>
        <hr />
        </nav>
    )
}

export default NavBar;