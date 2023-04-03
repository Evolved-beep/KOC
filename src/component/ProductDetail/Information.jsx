import React from "react";
import Rating from "./Rating";
const Informations = ({dataInformation, dataLocation, dataCover, dataTags, dataNote}) => {
     return(
            <div className="detail_container">
                <div className="information_container">
                    <h1>{dataInformation}</h1>
                    <h2>{dataLocation}</h2>
                     <div className="tag_container">
                        {dataTags.map((tags) => {
                            return(
                                <div key={tags.toString()} className="tag_tag">{tags}</div>
                                )
                            })}
                    </div>
                </div>
                <div className="user_container">
                        <div className="user_information">
                            <p>{dataCover.name}</p>
                            <img src={dataCover.picture} alt="" />
                        </div>
                        {<Rating dataRating={dataNote} maxRate={5}/>}
                </div>
        </div>
    ) 
} 

export default Informations