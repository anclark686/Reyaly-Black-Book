import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login/login"
import LogoutButton from "./Login/logout"

export function Navbar() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <nav className="navbar">
            <div className="brand">
            <h1>R</h1>
            <p>eyaly</p>
            <h1>B</h1>
            <p>lack</p>
            <h1>B</h1>
            <p>ook</p>
            </div>
            
            { user && (<LogoutButton />)}
            { !user && (<LoginButton />)}
        </nav>
  )
}
