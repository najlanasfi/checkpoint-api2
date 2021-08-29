import React from 'react'
import { Card } from 'react-bootstrap'

function User({user}){
    return (
        <div>
            <Card  style={{width: "18rem",marginTop:"2rem"}}>
                <Card.Body>
                    <Card.Title>Name: {user.name}</Card.Title>
                    <Card.Text>UserName: {user.username}</Card.Text>
                    <Card.Text>Email: {user.email}</Card.Text>
                    <Card.Text>Address: {user.adress}</Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default User
