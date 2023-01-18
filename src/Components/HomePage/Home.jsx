import Signup from "../SignupPage/Signup"
import { useNavigate } from "react-router-dom";
import React from "react";

function Home() {
    const navigate= useNavigate("")
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate("/signup")}> DENEME</button>
        </div>
    )
}

export default Home;