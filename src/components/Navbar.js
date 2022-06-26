import React from "react"
import world from "../images/world.png"

export default function Navbar() {
    return (
        <nav>
            <img src={world} alt="world" />
            <h1>my travel journal</h1>
        </nav>
    )
}