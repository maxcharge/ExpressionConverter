import React from 'react'
import styles from '../styles'
import {IconContext} from 'react-icons'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {FaHackerrank} from 'react-icons/fa'

function Footer() {

    const handleEnter=(event)=>{
        event.target.style.opacity=0.5;
    }

    const handleOut=(event)=>{
        event.target.style.opacity=1;
    }

    return (    
        <>
           
                <div style={styles.footer}>
                    <IconContext.Provider  value={{ size:"50px", color: "#404040" }}>
                        <div onMouseEnter={handleEnter} onMouseLeave={handleOut} onClick={event => window.location.href='https://github.com/maxcharge'} style={styles.icon}>
                            <AiFillGithub/>
                        </div>
                    </IconContext.Provider>
                    <hr style={{borderTop: "3px solid #bbb"}}/>
                    <IconContext.Provider  value={{ size:"50px", color: "#2867B2" }}>
                        <div onMouseEnter={handleEnter} onMouseLeave={handleOut} onClick={event => window.location.href='https://www.linkedin.com/in/mayur-jain-904982191'} style={styles.icon}>
                            <AiFillLinkedin/>
                        </div>
                    </IconContext.Provider>
                    <hr style={{borderTop: "3px solid #bbb"}}/>
                    <IconContext.Provider  value={{ size:"50px", color: "green" }}>
                        <div onMouseEnter={handleEnter} onMouseLeave={handleOut} onClick={event => window.location.href='https://www.hackerrank.com/maxcharge788769'} style={styles.icon}>
                            <FaHackerrank/>
                        </div>
                    </IconContext.Provider>
                </div>
        </>
    )
}

export default Footer
