import React from "react";
import { Accordion } from "react-bootstrap";
import "../presentation.css";

const Presentation = () => {
  return (
    <div className="presentaion" id="aboutus">
      <img src="/last.jpg" alt="" />
      {/* <p>Vous êtes les Bienvenus ...</p> */}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header variant="dark">
            A Propos De Nous...
          </Accordion.Header>
          <Accordion.Body className=" text-white bg-dark">
            Gt Pièces Autos est une société expérimentée dans le domaine des
            pièces automobiles. Spécialiste dans les pièces autos Jeep, Nissan,
            Mazda, Kia, Hyundai, Mitsubishi, Ford, Honda, ssangyong,
            Suzuki,mahindra, tata, haval, chery, et Toyota. La société propose
            aussi de nombreuses pièces dérivées pour véhicules neufs et anciens.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header style={{ fontSize: "15px" }}>
            Pour Quoi nous ?
          </Accordion.Header>
          <Accordion.Body className=" text-white  bg-dark">
           Parceque :<br/> Nous avons une grande connaissances dans le domaine , le premier but est la satisfaction de tous nos clients , Grace a nos contacts et notre large expérience toujours nous esséyant de couvrir les besoins de marché . votre confiance compte pour nous . 
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Presentation;
