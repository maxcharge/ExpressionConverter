import React from 'react'

function ListItem(props) {
    return (
        <li style={{
            display:"flex",
            flexDirection:"row",
            maxWidth:"500px",
            width:"auto",
            height:"20px",
            marginBottom:"20px",
            //backgroundColor:"#F5F5F5",
            padding: "10px",
            //boxShadow: "0 5px 10px 0 rgba(0,0,0,0.2)",
        }}>
            {props.children}
        </li>
    )
}

export default ListItem
