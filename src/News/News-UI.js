import React from "react";
import "./News-UI.css";

const NewsUI = (props) => {
  return (
    <div className="card-container">
    <a href={props.link}>
      <article className="card">
        <div className="thumb">
         <img  className="card_image" src={props.image} alt="" />
        </div>
          <div className="infos">
           <h2 className="title">{props.title}</h2>
        <p className="txt">{props.info}</p>
    </div>
</article>
</a>
    </div>
  );
}

export default NewsUI;