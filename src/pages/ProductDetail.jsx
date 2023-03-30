import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../component/ProductDetail/Carousel";
import Informations from "../component/ProductDetail/Information";
import Collapse from "../component/Collapse";
import "../assets/ProductDetail.css";
import { Navigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState("");

  useEffect(() => {
    async function getDataID() {
      fetch("../../data/data.json")
        .then((response) => response.json())
        .then((data) => {
          const dataId = data.find((logement) => logement.id === id);
          setLogement(dataId);
        });
    }
    getDataID();
  }, [id]);

  if (logement === undefined) {
    return <Navigate to="*" />;
  }
  if (logement) {
    return (
      <Fragment>
        <Carousel dataToCarousel={logement.pictures} />
        <Informations
          dataInformation={logement.title}
          dataLocation={logement.location}
          dataCover={logement.host}
          dataTags={logement.tags}
          dataNote={logement.rating}
        />
        <div className="item_container">
          <Collapse className="collapse_product" label="Description">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse className="collapse_product" label="Equipement">
            <ul>
              {logement.equipments.map((list) => {
                return(
                        <li key={list.toString()}>{list}</li>
                )
              })}
            </ul>
          </Collapse>
        </div>
      </Fragment>
    );
  }
};

export default ProductDetail;
