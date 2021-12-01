import React from 'react'
import { Link} from "react-router-dom"

function NotFound() {
    return (
        <div>
            <h1>Sorry</h1>
            <h2>Page Not Found</h2>
            <Link to="/">Back to home page ...</Link>
        </div>
    )
}

export default NotFound
