import React from "react";
import "./News-UI.css";

const NewsUI = ({ title, info, link, rating, image }) => {

  return (
    <div className="newsUI-fluid">
      <div className="newsCard newsCard-body text-center">
        <div className="overflow">
          <img src={image} alt="Image1" className="newsCard-img-top" />
        </div>
        <div card-body text-dark>
          <h4 className="newsCard-title">{title}</h4>
          <p className="newsCard-text text-secondary">{info}</p>
          <a href={link} className="btn btn-outline-success">
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsUI;