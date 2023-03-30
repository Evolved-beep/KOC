import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [isData, setIsData] = useState([]);

  useEffect(() => {
    async function getData() {
      fetch(`./data/data.json`)
        .then((response) => response.json())
        .then((isData) => {
          setIsData(isData);
        });
    }
    getData();
  }, []);

  return (
    <Fragment>
      <div className="card_item">
        {isData.map((item) => {
          return (
            <div className="card_card" key={item.id}>
              <Link to={`/product/${item.id}`}> 
                <div className="card_img">
                  <img src={item.cover} />
                <div className="card_title">
                  <p>{item.title}</p>
                </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Card;
