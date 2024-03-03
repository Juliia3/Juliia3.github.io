import "./about.scss";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import wave1 from "../../assets/images/wave1.png";
import img1 from "../../assets/images/about-img1.jpg";
import wave2 from "../../assets/images/wave2.png";
import img2 from "../../assets/images/about-img2.jpg";
import icon1 from "../../assets/images/icon1.svg";
import icon2 from "../../assets/images/icon2.svg";
import icon3 from "../../assets/images/icon3.svg";
import icon4 from "../../assets/images/icon4.svg";
import icon5 from "../../assets/images/icon5.svg";
import info from "../../assets/images/info.svg";
import team1 from "../../assets/images/team1.svg";
import team2 from "../../assets/images/team2.svg";
import team3 from "../../assets/images/team3.svg";
import team4 from "../../assets/images/team4.svg";
import team5 from "../../assets/images/team5.svg";
import team6 from "../../assets/images/team6.svg";
import mob2 from "../../assets/images/mob2.jpg";
import waveMob2 from "../../assets/images/wave-mob2.png";
import mob3 from "../../assets/images/mob3.jpg";

function About() {
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
    <div className="about">
      <div className="about__container container">
        <div className="about__block1">
          <div className="anim-box _anim-items">
            <h2 className="about__title title-main _anim-show">
              We are PirateBlood
            </h2>
          </div>
          <div className="anim-box _anim-items">
            <p className="about__text title2-main _anim-show">
              With our compass set on creativity and our sails fueled by
              passion, we bring you immersive and captivating gaming experiences
              that will shiver your timbers.
            </p>
          </div>

          <div className="about__block1-img">
            <img className="about__img1 wave" src={wave1} />
            <img className="about__img1 img1 _anim-img" src={img1} />
          </div>
          <div className="about__img-mobile-block">
            <img className="mob-img mob1" src={mob2} />
            <img className="mob-img wave-mob1" src={waveMob2} />
          </div>
        </div>
        <div className="about__block2">
          <div className="anim-box _anim-items">
            <h2 className="about__title title-main _anim-show">Why Us?</h2>
          </div>

          <div className="about__text-list">
            <div className="anim-box _anim-items">
              <p className="about__text-item item1 _anim-show-left">
                Innovation: We thrive on pushing the boundaries of gaming. From
                unique gameplay mechanics to stunning visual effects, innovation
                flows through our veins like the spirit of adventure.
              </p>
            </div>
            <div className="anim-box _anim-items">
              <p className="about__text-item item2 _anim-show">
                Passion: Every line of code, every stroke of the brush, and
                every piece of music is infused with our passion for gaming. We
                create games we love to play ourselves.
              </p>
            </div>

            <div className="anim-box _anim-items">
              <p className="about__text-item item1 _anim-show-left">
                Community: Our players are our partners on this epic voyage. We
                treasure the relationships we build with our community, and
                their feedback helps shape the course of our development.
              </p>
            </div>

            <div className="anim-box _anim-items">
              <p className="about__text-item item2 _anim-show">
                Diversity: Just like the vast ocean, our team is a diverse
                tapestry of talents and backgrounds. This diversity fuels our
                creativity and enables us to create games that resonate with
                players from all walks of life.
              </p>
            </div>
          </div>
          <div className="about__list2 text">
            <div className="about__item1-block">
              <div className="anim-box _anim-items">
                <p className="about__item _anim-show-left">
                  <img className="about__item-icon" src={icon1} />
                  Exceptional Team - Track Record In Finding Product Market Fit
                </p>
              </div>

              <div className="anim-box _anim-items">
                <p className="about__item _anim-show-left">
                  <img className="about__item-icon" src={icon2} />
                  Experienced, Ready & Primed For AI & AR Technologies
                </p>
              </div>

              <div className="anim-box _anim-items">
                <p className="about__item _anim-show-left">
                  <img className="about__item-icon" src={icon3} />
                  Expert Knowledge Across New Computing Platforms & Technologies
                </p>
              </div>
            </div>
            <div className="about__item1-block">
              <div className="anim-box _anim-items">
                <p className="about__item _anim-show">
                  <img className="about__item-icon" src={icon4} />
                  Key Product Delivery Succeses In Industry Defining Companies
                </p>
              </div>

              <div className="anim-box _anim-items">
                <p className="about__item _anim-show">
                  <img className="about__item-icon" src={icon5} />
                  Background In Designing And Developing Hit Games
                </p>
              </div>
            </div>
          </div>
          <div className="about__block2-img">
            <img className="about__img2 wave2" src={wave2} />
            <img className="about__img2 img2" src={img2} />
          </div>
          <div className="about__img-mobile-block">
            <img className="mob-img mob1" src={mob3} />
            <img className="mob-img wave-mob1" src={waveMob2} />
          </div>
        </div>
        <div className="about__block3">
          <div className="anim-box _anim-items">
            <h2 className="about__title title-main about__team-title _anim-show">
              Meet the Team
            </h2>
          </div>

          <div className="about__team-block">
            <div className="about__team1">
              <div className="about__person anim-box _anim-items">
                <img
                  className="about__person-img _anim-show-down"
                  src={team1}
                />
                <p className="about__person-name bold _anim-show-down">
                  Jaime Valls
                </p>
                <p className="about__person-title _anim-show-down">
                  Co-founder
                </p>
                <p className="about__person-position bold _anim-show-down">
                  Design
                </p>
                <ul className="about__block3 _anim-show-down">
                  <li>
                    Exceptional game designer, former Game Design Professor at
                    Barcelona CEV
                  </li>
                  <li>
                    Extensive experience in game design across all platforms:
                    Mobile, PC, AR/VR, console
                  </li>
                  <li>
                    Titles include Jurassic Park, Zoo Evolution, Yasai Ninja
                  </li>
                </ul>
              </div>
              <div className="about__person person2 anim-box _anim-items">
                <img
                  className="about__person-img _anim-show-down"
                  src={team2}
                />
                <p className="about__person-name bold _anim-show-down">
                  Pal Chohan
                </p>
                <p className="about__person-title _anim-show-down">
                  Co-founder
                </p>
                <p className="about__person-position bold _anim-show-down">
                  Product & Operations
                </p>
                <ul className="about__block3 _anim-show-down">
                  <li>
                    Former R & D Product Lead at TikTok, exited founder & mentor
                    at Outlier Ventures
                  </li>
                  <li>
                    Startup veteran, product management expert, highly skilled
                    at building & scaling world class products & teams
                  </li>
                  <li>Seasoned gaming fan</li>
                </ul>
              </div>
              <div className="about__person anim-box _anim-items">
                <img
                  className="about__person-img _anim-show-down"
                  src={team3}
                />
                <p className="about__person-name bold _anim-show-down">
                  Dennis Martinez
                </p>
                <p className="about__person-title _anim-show-down">
                  Co-founder
                </p>
                <p className="about__person-position bold _anim-show-down">
                  Development
                </p>
                <ul className="about__block3 _anim-show-down">
                  <li>
                    Viral game programmer and independent gaming industry expert
                  </li>
                  <li>
                    Released Eternal Walk, a viral horror game played by
                    millions of gamers and loved by huge Youtuber @markiplier
                  </li>
                  <li>Titles include Ludum Dare & GMTK jam</li>
                </ul>
              </div>
            </div>
            <div className="about__team1">
              <div className="about__person anim-box _anim-items">
                <img
                  className="about__person-img _anim-show-down"
                  src={team4}
                />
                <p className="about__person-name2 bold _anim-show-down">
                  Nicholas Beliaeff
                </p>
                <p className="about__person-position bold _anim-show-down">
                  Advisor
                </p>
                <ul className="about__block3 _anim-show-down">
                  <li>Visionary and strategic leader in the gaming industry</li>
                  <li>
                    Known for driving innovation, market growth, and successful
                    integration of new technologies
                  </li>
                  <li>Expert in online and MMO games</li>
                </ul>
              </div>
              <div className="about__person person2 anim-box _anim-items">
                <img
                  className="about__person-img _anim-show-down"
                  src={team5}
                />
                <p className="about__person-name2 bold _anim-show-down">
                  Filippo Facciani
                </p>
                <p className="about__person-position bold _anim-show-down">
                  Data Science
                </p>
                <ul className="about__block3 _anim-show-down">
                  <li>Expert in Data & Tech Leadership</li>
                  <li>
                    Data infrastructure design, analytics, cloud computing, and
                    fostering agile, cross-functional teams
                  </li>
                  <li>
                    Crucial for driving innovative solutions in data-intensive
                    industries
                  </li>
                </ul>
              </div>
              <div className="about__person anim-box _anim-items">
                <img
                  className="about__person-img _anim-show-down"
                  src={team6}
                />
                <p className="about__person-name2 bold _anim-show-down">
                  Nir Naamani
                </p>
                <p className="about__person-position bold _anim-show-down">
                  Advisor
                </p>
                <ul className="about__block3 _anim-show-down">
                  <li>
                    Founder & CEO of Permissionless Capital, leveraging
                    expertise in web3 and crypto ecosystem
                  </li>
                  <li>
                    Strong footing in digital asset management and marketing
                  </li>
                  <li>
                    At hitech4israel has driven tech support initiatives as a
                    catalyst for innovation in the industry
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about__team-block-mob">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <div className="about__person">
                  <img className="about__person-img" src={team1} />
                  <p className="about__person-name bold">Jaime Valls</p>
                  <p className="about__person-title">Co-founder</p>
                  <p className="about__person-position bold">Design</p>

                  <ul className="about__block3">
                    <li>
                      Exceptional game designer, former Game Design Professor at
                      Barcelona CEV
                    </li>
                    <li>
                      Extensive experience in game design across all platforms:
                      Mobile, PC, AR/VR, console
                    </li>
                    <li>
                      Titles include Jurassic Park, Zoo Evolution, Yasai Ninja
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="about__person">
                  <img className="about__person-img" src={team2} />
                  <p className="about__person-name bold">Pal Chohan</p>
                  <p className="about__person-title">Co-founder</p>
                  <p className="about__person-position bold">
                    Product & Operations
                  </p>

                  <ul className="about__block3">
                    <li>
                      Former R & D Product Lead at TikTok, exited founder &
                      mentor at Outlier Ventures
                    </li>
                    <li>
                      Startup veteran, product management expert, highly skilled
                      at building & scaling world class products & teams
                    </li>
                    <li>Seasoned gaming fan</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="about__person">
                  <img className="about__person-img" src={team3} />
                  <p className="about__person-name bold">Dennis Martinez</p>
                  <p className="about__person-title">Co-founder</p>
                  <p className="about__person-position bold">Development</p>
                  <ul className="about__block3">
                    <li>
                      Viral game programmer and independent gaming industry
                      expert
                    </li>
                    <li>
                      Released Eternal Walk, a viral horror game played by
                      millions of gamers and loved by huge Youtuber @markiplier
                    </li>
                    <li>Titles include Ludum Dare & GMTK jam</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="about__person">
                  <img className="about__person-img" src={team4} />
                  <p className="about__person-name2 bold">Nicholas Beliaeff</p>
                  <p className="about__person-position bold">Advisor</p>
                  <ul className="about__block3">
                    <li>
                      Visionary and strategic leader in the gaming industry
                    </li>
                    <li>
                      Known for driving innovation, market growth, and
                      successful integration of new technologies
                    </li>
                    <li>Expert in online and MMO games</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="about__person">
                  <img className="about__person-img" src={team5} />
                  <p className="about__person-name2 bold">Filippo Facciani</p>
                  <p className="about__person-position bold">Data Science</p>
                  <ul className="about__block3">
                    <li>Expert in Data & Tech Leadership</li>
                    <li>
                      Data infrastructure design, analytics, cloud computing,
                      and fostering agile, cross-functional teams
                    </li>
                    <li>
                      Crucial for driving innovative solutions in data-intensive
                      industries
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="about__person">
                  <img className="about__person-img" src={team6} />
                  <p className="about__person-name2 bold">Nir Naamani</p>
                  <p className="about__person-position bold">Advisor</p>
                  <ul className="about__block3">
                    <li>
                      Founder & CEO of Permissionless Capital, leveraging
                      expertise in web3 and crypto ecosystems
                    </li>
                    <li>
                      Strong footing in digital asset management and marketing
                    </li>
                    <li>
                      At hitech4israel has driven tech support initiatives as a
                      catalyst for innovation in the industry
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
