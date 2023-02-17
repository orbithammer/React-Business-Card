import React from "react"
// import FontAwesome from "@fortawesome/react-fontawesome"
// import { FontAwesomeIcon } from "fontawesome"
// import { FontAwesomeIcon } from "fontawesome"

export default function App() {
    return (
        <div>
            <main>
                <img className="portrait" src="portrait.png" />
                <div className="info">
                    <section className="titles">
                        <h1>Brock Penner</h1>
                        <h4 className="job-title">Frontend Developer</h4>
                        <h4>[INSERT WEBSITE HERE]</h4>
                    </section>
                    <section className="contact-info">
                        <a>Email</a>
                        <a>LinkedIn</a>
                    </section>
                    <section className="details">
                        <h3>About</h3>
                        <p>I am a frontend developer that keeps to the KISS design principle. I love to learn anything that will improve my craft and am willing to incorporate <strong><em>any and all</em></strong> feedback.</p>
                        <h3>Interests</h3>
                        <p>Wordsmith and admirer of master scribes. Rider of alpine waves. Aficionado of art-house cinema and popcorn flicks. Caretaker to repltiles and beetles. Dreamer of a solarpunk future.</p>
                    </section>
                </div>
                <footer>
                    <p>test</p>
                </footer>
            </main>
        </div>
    )
}