import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="page">
            <div className="hierarchicalNav">
                <Link className="nav-link underline" to="/">Home</Link>
                {">"}
                <Link className="nav-link underline" to="/about">about</Link>
            </div>
            <h2><b>Shopping Site</b></h2>
            <h3>by 1155159363 Wong Hong To</h3>
            <h3>Built with react.js</h3>
            <h3>Phase 1</h3>
        </div >
    )
}

export default About;