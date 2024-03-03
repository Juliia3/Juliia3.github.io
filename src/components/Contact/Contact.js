import "./contact.scss";
import contact1 from "../../assets/images/contact1.jpg";
import contact2 from "../../assets/images/contact2.png";
import React, { useState, useEffect } from "react";

function Contact() {
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
    <div className="contact">
      <div className="contact__container container">
        <div className="contact__block1">
          <div className="contact__block1-text">
            <div className="anim-box _anim-items">
              <h2 className="contact__title title2-main _anim-show">
                Get In Touch
              </h2>
            </div>

            <div className="anim-box _anim-items">
              <p className="contact__text _anim-show">
                We’d like to hear from you! Press inquires, support, etc. If you
                have anything to say, just click the button below.
              </p>
            </div>
            <div className="anim-box _anim-items">
              <button className="contact__button button _anim-show">
                Contact Us
              </button>
            </div>
          </div>
          <div className="contact__block1-img">
            <img className="contact__img img1" src={contact1} />
            <img className="contact__img img2" src={contact2} />
          </div>
          <div className="contact__text-mob">
            <p className="contact__text-mob">
              We’d like to hear from you! Press inquires, support, etc. If you
              have anything to say, just click the button below.
            </p>
            <button className="contact__button-mob button">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
