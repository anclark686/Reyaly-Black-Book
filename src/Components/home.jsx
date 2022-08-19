import React from "react"
import { ManageContacts } from "./Contacts/contactList"
import { Navbar } from './navbar'
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./loading";
import { Footer } from "./footer";


const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <Loading />;
      }
    return(
        <div className="home">
            <Navbar />
            {!isAuthenticated && 
                <div className="logged_out">
                    <h1 className="welcome">Welcome to Reyaly Black Book</h1>
                    <Footer fclass="footer_logged_out"/> 
                </div>
            }
            {isAuthenticated && (
            <div className="logged_in">
                <h1 className="welcome">Welcome {user.name}!</h1>
                <ManageContacts /> 
                <Footer fclass="footer_logged_in"/> 
            </div>)}   
        </div>
    )
}

export default Home;