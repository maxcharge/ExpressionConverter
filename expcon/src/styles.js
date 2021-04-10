const  styles={

    parentContainer:{
        display:"flex",
        flexDirection:"column",
        margin:"auto",
        marginTop:"20px",
        justifyContent:"center",
        justifyItems:"center",
        alignContent:"center",
        alignItems:"center",
        padding: "10px",
    },

    heading:{
        width:"100%",
        display:"flex",
        color:"#404040",
        justifyContent:"center",
    },

    text:{
        textAlign:"left",
        color:"#404040",
        margin:"10px",
        fontWeight:"Bold",
        fontSize:"",
    },

    formBox:{
        display:"flex",
        flexDirection:"column",
        maxWidth:"500px",
        width:"90%",
        height:"100px",
        marginBottom:"20px",
        backgroundColor:"#F5F5F5",
        padding: "10px",
        boxShadow: "0 5px 10px 0 rgba(0,0,0,0.2)",
    },

    inputBox1:{
        border: "1px solid #dedede",
        width:"100%",
        display: "flex",
        borderRadius: "2px",
        fontSize: "16px",
        padding: "10px",
    },
    
    inputBox2:{
        border: "1px solid #dedede",
        borderRadius: "2px",
        display: "flex",
        height: "16px",
        padding: "10px",
        alignContent:"center"
    },

    footer:{
        margin:"auto",
        marginTop:"10px",
        display:"flex",
        backgroundColor:"F5F5F5",  
    },
    
    icon:{
        margin:"10px",
    },

    btn:{
        width:"20%",
        fontWeight:"bold",
        borderRadius: "3px",
        border: "0.2px solid #dedede",
        backgroundColor:"green",
        opacity:1,
        color:"#F5F5F5", 
        textAlign:"center",
        padding:"2px",
    },

    List:{
        display:"none",
        flexDirection:"row",
        maxWidth:"500px",
        width:"90%",
        marginBottom:"20px",
        //backgroundColor:"#F5F5F5",
        padding: "10px",
        textAlign:"center",
        //boxShadow: "0 5px 10px 0 rgba(0,0,0,0.2)",
    },

    Listelement:{
        //border: "1px solid #dedede",
        borderRadius: "2px",
        display: "flex",
        flexDirection:"column",
        padding: "10px",
        margin:"auto"
    },

    radio:{
        display:"flex",
        flexDirection:"row",
        maxWidth:"500px",
        width:"90%",
        marginBottom:"20px",
        backgroundColor:"#F5F5F5",
        padding: "10px",
        justifyContent:"space-around",
        boxShadow: "0 5px 10px 0 rgba(0,0,0,0.2)",
    },

}

export default styles;