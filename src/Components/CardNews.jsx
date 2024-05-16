import React from "react";
import "./CSS/CardsNews.css";

const CardNews = ({ id, img, title, link }) => {
  return (
    <div className="CardNews" id={id}>
      <div className="news_img">
        <img src={img} alt="" />
      </div>
      <div className="news_a">
        <a href={link}>{title}</a>
      </div>
    </div>
  );
};

export default CardNews;
