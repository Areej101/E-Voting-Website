import React from 'react'
import './team.css'
import image from '../src/areej.jpeg'
const Team = () => {
    return (
        <div>
            <div className="about-section">
                <h1>About Us</h1>
                <p>This is my Winter Program Project of the Subject Web-Engineering</p>

            </div>

            <h2 className="teamhead">Team</h2>
            <div className="row">
                    <div className="column">
                        <div className="card">
                            <img src={image} alt="" className= "imgali"/>
                                <div className="container">
                                    <h1 className="name">Areej Atta</h1>
                                    <p className="title">Front-End Developer</p>
                                    <p>Student of Sukkur IBA University</p>
                                    <p>Areej@example.com</p>
                                    <p><button className="button"><a href="https://www.facebook.com/areej.avesi.90" target='_blank'>Contact</a></button></p>
                                </div>
    </div>
                        </div>

                        </div>
                    </div>
                    
                    )
}

export default Team
