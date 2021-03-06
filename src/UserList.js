import React,{useState,useEffect} from 'react';
import axios from "axios";
import User from "./User";
function UserList(){
    let [users,setUsers]=useState([]);

    useEffect(() => {
       axios.get("https://jsonplaholder.typicode.com/users")
       .then(response=>setUsers(...response.data));
     
    }, [])
    console.log(users)
    
    return (
        <div className='Userlist'>
            {users.map((user)=>
            <User user={user}/>
            )}
        </div>
    )
}

export default UserList
