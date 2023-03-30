import React from "react";
import { Link } from "react-router-dom";
import ".././assets/Error.css"

const Error = () => {
    return(
        <div className="error_container">
            <div className="error_value">
                <span>404</span>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <p className="redirection"><Link to="/">Retourner sur la page d’accueil</Link></p>

            </div>
        </div>

    )
}

export default Error