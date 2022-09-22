import React from 'react';

function User(props){
    const {name,email,picture,websit}=props.user;

    const userStyle={
        border:'2px solid red',
        margin:'10px',
        borderRadius:'10px',
        padding:'10px',
        display:'flex',
        width:'60%'
    }
    const linkStyle={
        color:'blue',
        cursor:'pointer'
    }
    const buttonStyle={
        cursor:'pointer'
    }
    return(
        <div style={userStyle}>

            <div style={{marginTop:'6%'}}>
                <img src={picture.large} alt=""></img>
            </div>

            <div style={{marginLeft:'30px',}}>
                <h1> Name : {name.first + '' + name.last}</h1>
                <p> Email : {email}</p>
                <p>Phone : <button >Display mobile no ! </button> <span style={{fontSize:'10px', color:'red'}}>Only u can see the person after add he/she</span></p>
                <p><a style={linkStyle} target="blank" href={websit}> Learn about me </a></p>
                <button>Add me </button>
            </div>
        </div>
    )
}        
export default User;