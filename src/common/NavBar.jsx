import React from "react"; 
import './Water.css';

const NavBar = () => {
    return (
        <nav>
            <h3>
                <div className="logo1">
{/* trying */}
{/* trying */}
                    <a href ="/">
                        <img src ="/logo1.png" alt="logo that says quiz">
                        </img>
                    </a>
                </div>
            </h3>     
                <a class="nav-link" href="/"> Home</a> 
                <a class="nav-link" href="/bookq"> Book Quizz</a> 
                <a class="nav-link" href="/butterflyq"> Butterfly Quizz</a> 
                <a class="nav-link" href="/musicq"> Music Quizz</a> 
                <a class="nav-link" href="/login">The Secret</a>
        <hr />
        </nav>
    )
}

export default NavBar;