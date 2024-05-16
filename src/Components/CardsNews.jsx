import React from "react";
import "./CSS/CardsNews.css";
import CardNews from "./CardNews";

const CardsNews = () => {
  let news = [
    {
      id: 1,
      img: "https://news-by.gismeteo.st/2021/04/a8a54906.jpg",
      title: "Число погибших от наводнений и оползней на Суматре достигло 67",
      link: "https://www.gismeteo.kz/news/stihiynye-yavleniya/chislo-pogibshih-ot-navodnenij-i-opolznej-na-sumatre-dostiglo-67/",
    },
    {
      id: 2,
      img: "https://news-kz.gismeteo.st/2024/05/FRZO3OFZSJLPFOX5NPDKJFJBBQ-scaled.jpg",
      title: "Оползень в Кении накрыл 5 человек",
      link: "https://www.gismeteo.kz/news/stihiynye-yavleniya/opolzen-v-kenii-nakryl-5-chelovek/",
    },
    {
      id: 3,
      img: "https://vera.kz/wp-content/uploads/2020/11/main37998024_bb81982e244f5a7cf4c1375461e8f3d9-%D0%B3%D0%BE%D1%82.jpg",
      title: "Землетрясение магнитудой 4,0 зарегистрировали в Калифорнии",
      link: "https://www.gismeteo.kz/news/stihiynye-yavleniya/zemletryasenie-magnitudoj-4-0-zaregistrirovali-v-kalifornii/",
    },
    {
      id: 4,
      img: "https://news-kz.gismeteo.st/2024/05/999999999_16840.jpg",
      title: "Яркий метеор пронесся в небе над США",
      link: "https://www.gismeteo.kz/news/sobytiya/yarkij-meteor-pronessya-v-nebe-nad-ssha/",
    },
  ];
  return (
    <div className="CardsNews">
      {news.map((n) => (
        <CardNews
          key={n.id}
          id={n.id}
          img={n.img}
          title={n.title}
          link={n.link}
        />
      ))}
    </div>
  );
};

export default CardsNews;
