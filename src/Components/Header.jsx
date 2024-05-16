import React from "react";
import "./CSS/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_weather">
      <div className="header_top">
        <div className="header_container">
          <div className="header_item">
            <div className="top_left">
              <Link to="./" className="header_logo">
                GISMETEO
              </Link>
            </div>

            <div className="top_middle">
              <Link to="./almaty" className="almaty">
                Алматы
              </Link>
              <Link to="./karagandy" className="karagandy">
                Қарағанды
              </Link>
              <Link to="./astana" className="astana">
                Астана
              </Link>
              <Link to="./shymkent" className="shymkent">
                Шымкент
              </Link>
              <Link to="./semey" className="semey">
                Семей
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header_subnav">
        <div className="subnav_container">
          <div className="subnav">
            <a href="" className="now">
              Сейчас
            </a>
            <a href="" className="today">
              Сегодня
            </a>
            <a href="" className="tomorrow">
              Завтра
            </a>
            <a href="" className="3_days">
              3 дня
            </a>
            <a href="" className="10_days">
              10 дней
            </a>
            <a href="" className="2_weeks">
              2 недели
            </a>
            <a href="" className="month">
              Месяц
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
