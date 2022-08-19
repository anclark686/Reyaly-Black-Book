import React, { useState, useEffect } from "react"
import Axios from "axios"
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Modal, Form } from "react-bootstrap"
import './contacts.css'

export const ManageContacts = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])
    const { user } = useAuth0();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getDetails()
        console.log(user)
    }, [count]) 

    const sendDetails = async () => {
        console.log(`name: ${name}, number: ${number}, email: ${email}, user: ${user.name}`)
        await Axios.post("https://reyaly-bb-backend.herokuapp.com/add_user", {
            name: name,
            number: number,
            email: email,
            username: user.name
        }).then((response) => {
            console.log(response.data)
            setCount(count + 1)
        })
        handleClose()
    }


    const getDetails = async () => {
        await Axios.post("https://reyaly-bb-backend.herokuapp.com/users",{
            username: user.name
        }).then(
            response => setUsers(response.data)
        )
    }

    const deleteOne = async (id) => {
        await Axios.post("https://reyaly-bb-backend.herokuapp.com/delete_user", {
            id: id
        }).then((response) => {
            console.log(response.data)
            setCount(count + 1)
        })
        
    }


    return(
        <div className="manage_contacts">

            <Button 
                variant="light" 
                className="add_button"
                size="lg"
                onClick={handleShow}
            >
                Add Contact
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="add_user">
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control 
                            name="name" 
                            type="text" 
                            placeholder="Name" 
                            onChange={(e) => setName(e.target.value.trim())}
                        />
                        <Form.Label htmlFor="age">Number</Form.Label>
                        <Form.Control 
                            name="age" 
                            type="number" 
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control 
                            name="email" 
                            type="text" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="dark" onClick={sendDetails}>
                    Add Contact
                </Button>
                </Modal.Footer>
            </Modal>

            

            <div className="header">
                <h1>Contact List</h1>
            </div>
            <div className="contact_list">
                
                {users.map((val, key) => {
                    return (
                        <div className="user" key={val._id}>
                            <h3>{val.name}</h3>
                            <p>{val.number}</p>
                            <p>{val.email}</p>
                            <Button 
                                variant="light"
                                size="sm"
                                onClick={() => deleteOne(val._id)}
                            >
                                Delete
                            </Button>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
