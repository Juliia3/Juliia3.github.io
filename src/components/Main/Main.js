import "./main.scss";
import video from "../../assets/images/video.mp4";
import circle from "../../assets/images/circle.svg";
import arrow from "../../assets/images/arrow.svg";
import img from "../../assets/images/main-img.png";
import strings from "../../assets/images/strings.png";
import game1 from "../../assets/images/game1.jpg";
import game2 from "../../assets/images/game2.jpg";
import game3 from "../../assets/images/game3.jpg";
import game4 from "../../assets/images/game4.jpg";
import mob1 from "../../assets/images/mob1.jpg";
import waveMob1 from "../../assets/images/wave-mob1.png";

import React, { useEffect, useState } from "react";

function Main() {
  const [animItems, setAnimItems] = useState([]);

  useEffect(() => {
    const items = document.querySelectorAll("._anim-items");
    setAnimItems(items);
  }, []);

  useEffect(() => {
    if (animItems.length > 0) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [animItems]);

  function handleScroll() {
    animItems.forEach((animItem) => {
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = animItem.offsetTop;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        window.pageYOffset > animItemOffset - animItemPoint &&
        window.pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    });
  }

  useEffect(() => {
    handleScroll();
  }, [animItems]);
  return (
    <div className="main">
      <div className="main__main">
        <video className="main__bg" autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="main__title-block">
          <h2 className="main__title main__title1 title-main">
            Sailing The Seas
          </h2>
          <div className="main__title2 main__title">
            <h2 className="title-main">Of </h2>
            <div className="red changing-word">
              <span className="span">Imagination.</span>
            </div>
          </div>
          <div>
            <a href="#main">
              <img className="arrow" src={arrow} />
            </a>
          </div>
        </div>
        <div className="main__title-mobile-block">
          <h2 className="main__title-mobile title-main">
            Sailing the Seas Of Imagination
          </h2>
        </div>
        <div className="main__img-mobile-block">
          <img className="mob-img mob1" src={mob1} />
          <img className="mob-img wave-mob1" src={waveMob1} />
        </div>
      </div>

      <div className="main__container container" id="main">
        <div className="main__block">
          <div className="main__text-block">
            <div className="anim-box _anim-items">
              <h2 className="main__text-title title-main _anim-show">
                We are PirateBlood
              </h2>
            </div>
            <div className="anim-box _anim-items">
              <p className="main__text-text title2-main _anim-show">
                A daring and innovative game studio that sails the digital seas
                in search of gaming adventures like no other.
              </p>
            </div>

            <button className="button">Learn More</button>
          </div>
          <div className="main__img-block">
            <img className="main__strings" src={strings} />
            <img className="main__img" src={img} />
            <img className="main__circle" src={circle} />
          </div>
        </div>
        <div className="main__games">
          <h2 className="main__text-title title-main">Our Fleet of Games</h2>

          <div className="main__img2-block">
            <div className="main__img2-games">
              <div className="main__game-block main__game-block1">
                <img className="main__game game1" src={game1} />
                <div className="text-overlay">Zundral</div>
              </div>
              <div className="main__game-block main__game-block2">
                <img className="main__game game2" src={game2} />
                <div className="text-overlay">REX</div>
              </div>
              <div className="main__game-block main__game-block3">
                <img className="main__game game3" src={game3} />
                <div className="text-overlay">Shine</div>
              </div>
              <div className="main__game-block main__game-block4">
                <img className="main__game game4" src={game4} />
                <div className="text-overlay">Real Nature</div>
              </div>
            </div>
          </div>
          <button className="button button2">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
