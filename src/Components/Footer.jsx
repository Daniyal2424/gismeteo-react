import React from "react";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <div className="footer_foot">
      <div className="footer_links">
        <a href="/">
          <h3>Соглашения</h3>
        </a>
        <a href="/">
          <h3>Конфиденциальность</h3>
        </a>
        <a href="/">
          <h3>Размещение Рекламы</h3>
        </a>
        <a href="/">
          <h3>Представление данных</h3>
        </a>
        <a href="/">
          <h3>Контакты</h3>
        </a>
        <a href="/">
          <h3>Оставить Отзыв</h3>
        </a>
      </div>
      <p>
        Погода Алматы на 10 дней предоставлена исключительно для личного
        некоммерческого использование.
      </p>
      <h5>@Gismeteo</h5>
    </div>
  );
};

export default Footer;
