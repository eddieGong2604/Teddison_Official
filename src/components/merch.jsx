import React from "react";
import Logo from "../img/logo.png";
import styled from "styled-components";
import TShirt from "../img/tshirt.png";

const MerchButton = styled.button`
  background-color: black;
  color: #e8c990;
  border: none;
  border-radius: 15px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 15px;
  margin-bottom: 10px;
  float: right;
`;
const ProductCard = () => {
  return (
    <div style={{ width: "50vw" }} className="row text-center">
      <div
        style={{ backgroundColor: "#c2a26e" }}
        className="col-lg-4 rounded-left"
      >
        {" "}
        <img src={TShirt} width={180} height={300} />
      </div>
      <div
        style={{
          backgroundColor: "#3d342f",
          wordWrap: "break-word",
          color: "#c2a26e"
        }}
        className="col-lg-8 text-left rounded-right"
      >
        {" "}
        <br></br>
        <h3 style={{ fontFamily: "augustus" }}>Teddison T-shirt</h3>
        <p className="font-weight-light">Unisex</p>
        <h6>
          <i>$99.99</i>
        </h6>
        <p className="font-weight-light">
          Cupidatat aliquip aute consectetur nisi elit nulla duis commodo
          consectetur cillum. Culpa mollit pariatur sit sint ipsum est culpa.
          Nulla ullamco veniam esse sunt eu. Exercitation esse ex est labore ea
          sunt ea.
        </p>
        <br></br>
        <MerchButton>Purchase</MerchButton>
      </div>
    </div>
  );
};

const Merch = () => {
  return (
    <div className="text-center">
      <a href="/">
        <img src={Logo} className="mb-1" />
      </a>
      <h1 style={{ color: "rgb(91, 72, 47)", fontFamily: "augustus" }}>
        MERCH
      </h1>
      <br></br>
      <ProductCard />
    </div>
  );
};

export default Merch;
