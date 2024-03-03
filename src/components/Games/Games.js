import "./games.scss";
import zundral1 from "../../assets/images/zundral1.png";
import zundral2 from "../../assets/images/zundral2.jpg";
import zundral3 from "../../assets/images/zundral3.jpg";
import rex1 from "../../assets/images/rex1.jpg";
import rex2 from "../../assets/images/rex2.jpg";
import shine1 from "../../assets/images/shine1.jpg";
import shine2 from "../../assets/images/shine2.jpg";
import nature1 from "../../assets/images/nature1.jpg";
import nature2 from "../../assets/images/nature2.jpg";
import gameMob1 from "../../assets/images/game-mob1.jpg";
import gameMob2 from "../../assets/images/game-mob2.jpg";
import gameMob3 from "../../assets/images/game-mob3.jpg";
import gameMob4 from "../../assets/images/game-mob4.jpg";
import gameMob5 from "../../assets/images/game-mob5.jpg";
import gameMob6 from "../../assets/images/game-mob6.jpg";
import gameMob7 from "../../assets/images/game-mob7.jpg";
import gameMob8 from "../../assets/images/game-mob8.jpg";

import React, { useState, useEffect } from "react";

function Games() {
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
    <div className="games">
      <div className="games__container container">
        <div className="games__block">
          <div className="anim-box _anim-items">
            <h3 className="games__title title2-main _anim-show">Our Games</h3>
          </div>
          <div className="anim-box _anim-items">
            <p className="games__text _anim-show">
              Join us as we unveil a collection of thrilling titles, each
              crafted with passion and innovation. Ready to embark on
              unforgettable gaming adventures? Explore the diverse worlds we've
              created, where excitement knows no limits!
            </p>
          </div>
        </div>
        <div className="games__block">
          <div className="anim-box _anim-items">
            <h3 className="games__title title2-main _anim-show red">Zundral</h3>
          </div>
          <div className="anim-box _anim-items">
            <p className="games__text _anim-show">
              Welcome to the world of Zundral, a real-time strategy (RTS) game
              that thrusts you into a medieval fantasy universe designed to be
              shaped by the community. Zundral is not just a game; it's a
              living, evolving story unfolding in your pocket, where every
              player's actions can sway the course of history.
            </p>
          </div>

          {/* <div>
            <img className="games__game1" src={zundral1} />
          </div> */}
          {/* <div className="anim-box _anim-items">
            <p className="games__text _anim-show">
              At the heart of Zundral lies a rich tapestry of incredible places,
              mythic creatures, and epic conflicts. Players take charge,
              creating and managing armies to battle their way to victory,
              leaving a lasting impression on the ever-changing tapestry of
              Zundral's story.
            </p>
          </div> */}

          <div className="games-block-img">
            <img className="games__game1" src={zundral2} />
          </div>
          <div className="games-block-img-mob">
            <img className="games__game1" src={gameMob1} />
          </div>
          <div className="anim-box _anim-items">
            <p className="games__text _anim-show">
              At the heart of Zundral lies a rich tapestry of incredible places,
              mythic creatures, and epic conflicts. Players take charge,
              creating and managing armies to battle their way to victory,
              leaving a lasting impression on the ever-changing tapestry of
              Zundral's story.
            </p>
          </div>

          <div className="games-block-img">
            <img className="games__game1" src={zundral3} />
          </div>
          <div className="games-block-img-mob">
            <img className="games__game1" src={gameMob2} />
          </div>
        </div>
        <div className="games__block">
          <div className="anim-box _anim-items">
            <h3 className="games__title title2-main _anim-show red">
              REX - Rogue Elite Xtreme
            </h3>
          </div>
          <div className="anim-box _anim-items">
            <p className="games__text _anim-show">
              Welcome to the Chaos of Megacity REX is a pulse-pounding
              multiplayer top shooter-looter game set in the heart of a
              sprawling cyberpunk megacity. With gameplay tailored for both
              smartphones and PC, players are thrust into a dystopian world
              filled with corporate giants, ruthless crime syndicates, corrupt
              institutions, and eerie phenomena lurking around every neon-soaked
              corner.
            </p>
          </div>

          <div className="games-block-img">
            <img className="games__game1" src={rex1} />
          </div>
          <div className="games-block-img-mob">
            <img className="games__game1" src={gameMob3} />
          </div>
          <div className="anim-box _anim-items">
            <h4 className="games__title2 title2-main _anim-show">
              Survive the Unforgiving Megacity
            </h4>
          </div>
          <div className="anim-box _anim-items">
            <p className="games__text _anim-show">
              In the world of REX, survival isn't just a goal; it's a desperate
              struggle. The odds are stacked against you, and the key to your
              survival lies in the acquisition of cutting-edge Cyber Implants
              that grant you extraordinary skills and powers. The currency of
              this grim world is credits, and you'll need plenty of them to
              upgrade your implants.
            </p>
          </div>

          <div className="games-block-img">
            <img className="games__game1" src={rex2} />
          </div>
          <div className="games-block-img-mob">
            <img className="games__game1" src={gameMob4} />
          </div>
          <div className="anim-box _anim-items">
            <h4 className="games__title2 title2-main _anim-show">
              Choose Your Path to Prosperity
            </h4>
          </div>
          <div className="anim-box _anim-items">
            <p className="games__text _anim-show">
              To amass the wealth and power you need, you'll have to make some
              tough choices. Will you work solo, infiltrating corporate
              skyscrapers, raiding secret facilities, or robbing banks?
              Alternatively, align yourself with notorious crime organizations
              like the Yakuza, Russians, or the Mafia. Each path offers distinct
              risks and rewards, granting access to new and better items and
              deals.
            </p>
          </div>
        </div>
        <div className="games__block">
          <div className="anim-box _anim-items">
            <h3 className="games__title title2-main _anim-show red">
              Shine: The Ultimate Music and Dance Odyssey
            </h3>
          </div>
          <div className="anim-box _anim-items">
            <p className="games__text _anim-show">
              Step into the enchanting world of Shine, where the rhythm of music
              and the allure of dance come together in a mesmerising mobile game
              experience. Your journey begins as you mould your avatar into a
              sensational artist, aiming to rise to the pinnacle of fame and
              become the world's number-one artist. Immerse yourself in a
              captivating world filled with magical music and dazzling dance
              moves, and let your creativity shine!
            </p>
          </div>

          <div className="games-block-img">
            <img className="games__game1" src={shine1} />
          </div>
          <div className="games-block-img-mob">
            <img className="games__game1" src={gameMob5} />
          </div>
          <div className="anim-box _anim-items">
            <h4 className="games__title2 title2-main _anim-show">Your Goal</h4>
          </div>
          <div className="anim-box _anim-items">
            <p className="games__text _anim-show">
              Elevate your avatar's status to claim the title of the world's
              ultimate artist.
            </p>
          </div>

          <div className="games-block-img">
            <img className="games__game1" src={shine2} />
          </div>
          <div className="games-block-img-mob">
            <img className="games__game1" src={gameMob6} />
          </div>
          <div className="anim-box _anim-items">
            <h4 className="games__title2 title2-main _anim-show">
              How to Achieve It
            </h4>
          </div>
          <div className="anim-box _anim-items">
            <p className="games__text _anim-show">
              Harness and refine your avatar's distinctive dancing and singing
              talents, as well as their impressive collection of cosmetic
              assets. The path to stardom lies in participating in thrilling
              events, where your avatar will unveil their skills, reap rewards,
              and advance towards greatness. Skill Development: By actively
              engaging in events, your avatar will put their abilities to the
              test, earning valuable rewards and advancing in proficiency. This
              progression will open doors to more challenging events, allowing
              you to compete against others who share your dream of becoming the
              best.
            </p>
          </div>
        </div>
        <div className="games__block">
          <div className="anim-box _anim-items">
            <h3 className="games__title title2-main _anim-show red">
              Real Nature
            </h3>
          </div>
          <div className="anim-box _anim-items">
            <p className="games__text _anim-show">
              Are you ready to embark on an extraordinary journey into the heart
              of the natural world? Real Nature is not just a game; it's a
              gateway to the wonders of our planet's flora and fauna. This
              innovative app leverages the power of geolocation to transform
              your surroundings into an enchanting playground for nature
              enthusiasts of all ages.
            </p>
          </div>

          <div className="games-block-img">
            <img className="games__game1" src={nature1} />
          </div>
          <div className="games-block-img-mob">
            <img className="games__game1" src={gameMob7} />
          </div>
          <div className="anim-box _anim-items">
            <h4 className="games__title2 title2-main _anim-show">
              Discover the Real World
            </h4>
          </div>
          <div className="anim-box _anim-items">
            <p className="games__text _anim-show">
              Real Nature invites you to step outside and explore the real world
              around you like never before. Using your device's geolocation,
              you'll embark on a quest to find and collect a vast array of
              animals, plants, and geographical landmarks. It's a captivating
              adventure that encourages players to connect with nature, one
              discovery at a time.
            </p>
          </div>

          <div className="games-block-img">
            <img className="games__game1" src={nature2} />
          </div>
          <div className="games-block-img-mob">
            <img className="games__game1" src={gameMob8} />
          </div>
          <div className="anim-box _anim-items">
            <h4 className="games__title2 title2-main _anim-show">
              Education Through Exploration
            </h4>
          </div>
          <div className="anim-box _anim-items">
            <p className="games__text _anim-show">
              With Real Nature, learning about the natural world becomes an
              immersive experience. Whether you're in your backyard or visiting
              a new place, you'll have the opportunity to meet and learn about
              the diverse creatures and elements that share our planet. Real
              Nature is a powerful educational tool for kids and adults alike,
              fostering a deep understanding of the world's ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
