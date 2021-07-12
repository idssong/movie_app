import React from "react";

const About = (props)=>{
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If that if i
                granted, all else follows."
            </span>
            <span>- George Orwell., 1984</span>
        </div>
    );
}

export default About;