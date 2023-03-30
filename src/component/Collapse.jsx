import React, { useState } from "react";

const Collapse = (props) => {
    const [open, setOpen] = useState(false)
    const [rotate, setRotate] = useState(false)

    const Toggle = () => {
        setOpen(!open)    
        setRotate(!rotate)   
    }

    return(
        <div className={`container_collapse ${props.className}`}>
        <div className="banner_collapse">
            <h2 className="name">{props.label}</h2>
            <svg width="25" height="15" viewBox="0 0 25 15" className={rotate ? "active" : ""} fill="none" onClick={Toggle} xmlns="http://www.w3.org/2000/svg">
                <path d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z" fill="white"/>
            </svg>

            
        </div>
            <div className={open ? "collapse_bg_active" : "collapse_bg_hidden" }>{props.children}</div>
        </div>
    )

}

export default Collapse