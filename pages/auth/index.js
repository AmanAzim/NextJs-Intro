import React from 'react'
import User from '../../components/User'

const authindexPage=(props)=>{
    return(
        <div>
            <h1>The Auth Index page {props.appName}</h1>
            <User name="Aman" age="31"/>
        </div>
    )
};

authindexPage.getInitialProps=(contex)=>{
    console.log(contex);
    const promise=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({appName: "Super App (Auth)"})
        }, 1000)
    })
    return promise;
};

export default authindexPage;
