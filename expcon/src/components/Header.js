import React from 'react'
import styles from '../styles'


function Header({children}) {
    return (
        <div style={styles.heading}>
            <h2 style={styles.text} >
                {children}
            </h2>
        </div>
    )
}

export default Header
