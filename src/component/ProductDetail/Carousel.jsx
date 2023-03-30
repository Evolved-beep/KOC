import React, { Fragment, useState } from "react";

const Carousel = ({dataToCarousel}) =>{

    let [Currentindex, setCurrentIndex] = useState(0)
    const [length] = useState(dataToCarousel.length)

    const nextSlide = () => {
        setCurrentIndex(Currentindex === length - 1 ? 0 : Currentindex + 1)

    }
    const prevSlide = () => {
        setCurrentIndex(Currentindex === 0 ? length - 1 : Currentindex - 1 )
    }
    return (
      <div className="picture_container">
        {length === 1 ? (
            <Fragment>
                <div className="carousel_container">
                    <img className="image" src={dataToCarousel} alt="" />
                </div>
            </Fragment>
        ) : (
          <Fragment>
            <div className="carousel_container">
              <img
                className="image"
                src={dataToCarousel[Currentindex]}
                alt=""
              />
            </div>
            <img
              className="chevron_droit"
              src="../../../../img/chevron_droit.png"
              onClick={nextSlide}
              alt=""
            />
            <img
              className="chevron_gauche"
              src="../../../../img/chevron_gauche.png"
              onClick={prevSlide}
              alt=""
            />
            <p>
              {Currentindex + 1}/{length}
            </p>
          </Fragment>
        )}
      </div>
    );

} 

export default Carousel