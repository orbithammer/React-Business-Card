import React from "react"


export default function App() {
    return (
        <div>
            <main>
                <img className="portrait" src="./images/portrait.png" />
                <div className="info">
                    <section className="titles">
                        <h1>Brock Penner</h1>
                        <h4 className="job-title">Frontend Developer</h4>
                        <h4><a onClick={()=>{window.open("https://jovial-sunshine-78a3f0.netlify.app/index.html", "_blank")}}>Click here for portfolio.</a></h4>
                    </section>
                    <section className="contact-info">
                        <a onClick={()=>{window.open("mailto: brockpenner@protonmail.com", "_blank")}}><img href="" src="./images/envelope-solid.svg" />Email</a>
                        <a onClick={()=>{window.open("https://www.linkedin.com/in/brock-penner-97322062/", "_blank")}}><img src="./images/linkedin.svg" className="linkedin-icon"/>LinkedIn</a>
                    </section>
                    <section className="details">
                        <h3>About</h3>
                        <p>I am a frontend developer that keeps to the KISS design principle. I love to learn anything that will improve my craft and am willing to incorporate <strong><em>any and all</em></strong> feedback.</p>
                        <h3>Interests</h3>
                        <p>Wordsmith and admirer of master scribes. Rider of alpine waves. Aficionado of art-house cinema and popcorn flicks. Caretaker to repltiles and beetles. Dreamer of a solarpunk future.</p>
                    </section>
                </div>
                <footer>
                    <a onClick={()=>{window.open("https://techhub.social/@brockpenner", "_blank")}}>
                        <img src="./images/mastodon.svg" />
                    </a>
                    <a onClick={()=>{window.open("https://www.twitter.com/BrockTIPenner", "_blank")}}>
                        <img src="./images/twitter.svg" />
                    </a>
                    <a onClick={()=>{window.open("https://www.github.com/orbithammer", "_blank")}}>
                        <img src="./images/github.svg" />
                    </a>
                </footer>
            </main>
        </div>
    )
}

// <a><img src="./images/mastodon.svg" /></a>