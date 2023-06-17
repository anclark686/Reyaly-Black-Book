import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login/login"
import LogoutButton from "./Login/logout"

export function Navbar() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <nav className="navbar">
            <div className="brand">
            <h2>R</h2>
            <p>eyaly</p>
            <h2>B</h2>
            <p>lack</p>
            <h2>B</h2>
            <p>ook</p>
            </div>
            
            { user && (<LogoutButton />)}
            { !user && (<LoginButton />)}
        </nav>
  )
}
