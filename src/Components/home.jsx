import React from "react"
import { ManageContacts } from "./Contacts/contactList"
import { Navbar } from './navbar'
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./loading";
import { Footer } from "./footer";
import LoginButton from "./Login/login"


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
                    <div className="manage_contacts">
                        <h1>Manage Your Contacts</h1>
                        <h5>
                            Reyaly Black Book is like the little blsck
                            book from the old days, now online. Manage
                            and easily access your contacts using your 
                            new online "little black book". Login to get started
                        </h5>
                        <LoginButton />
                    </div>
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