import React from "react";

const Rating = ({dataRating, maxRate}) => {

    const starsArray = []

    for(let i = 0; i < dataRating; i++){
        const Rouge = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
            </svg>
        starsArray.push(Rouge)    
    }

    const incrementEtoile = maxRate - dataRating; 
    for(let i = 0; i < incrementEtoile; i++){
        const Grise = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#cccccc"/>
                </svg>
        starsArray.push(Grise)
    }
        return(
                <div className="stars_container">
                    {starsArray}
                </div>
        )

        
}

export default Rating