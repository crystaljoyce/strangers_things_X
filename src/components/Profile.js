import React, { useState, useEffect } from 'react';


const Profile = (props) => {

    const { user, token, setUser } = props; 

    const fetchUser = async () => {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
           
            }),
            data = await response.json();
            console.log('user posts: ',data?.data?.posts)
            console.log("user : ", data?.data)
            setUser(data?.data)
            
        }

useEffect(() => {
    fetchUser()
    console.log('user posts: ', user)
    
}, [token])
    
    return <>  { token 
        ? <div> 

            <h3>Current user: </h3> 
            <h5>{user?.username}</h5>
            <div> Total posts: {user?.messages?.length}  </div>
            <div> Total Messages: {user?.posts?.length}</div>
            
        </div>
        : 'You must be a registered User to view Profile.' }
    </> 
}

export default Profile; 