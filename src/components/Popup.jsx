import React from "react";

export default function Popup({ setShow }) {
  return (
    <div className="popup">
      <div className="popup__overlay">
        <section className="formsection">
          <div className="formsection__content">
            <div className="formsection__heading">
              <span>REGISTER </span> YOUR INTEREST
            </div>
            <div className="formsection__info">
              Register your interest to book your apartment at special
              discounted rates.
            </div>
            <div className="formsection__info__two">
              Kindly fill the form and our representative will get back to you
              for detailed information including Payment Plan, Floor Plans and
              special discounted offers. Your information will be kept
              confidential.
            </div>
            <div className="formsection__content__all__input">
              <div className="formsection__content__input">
                <input type="Name" name="Name" id="Name" placeholder="Name" />
              </div>
            </div>
            <div className="formsection__content__all__input">
              <div className="formsection__content__input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="formsection__content__all__input">
              <div className="formsection__content__input">
                <input type="tel" name="tel" id="tel" placeholder="Number" />
              </div>
            </div>
            <div className="formsection__content__all__input">
              <div className="formsection__content__input">
                <input type="Text" name="text" id="text" placeholder="City" />
              </div>
            </div>
            <div className="formsection__content__all__msg">
              <div className="formsection__content__msg">
                <textarea
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Message"
                  cols={20}
                  rows={4}
                />
              </div>
            </div>
            <div className="formsection__content__all__button">
              <button
                onClick={() => {
                  setShow(!true);
                }}
              >
                Submit
              </button>
            </div>
            <button
              className="popup__close"
              onClick={() => {
                setShow(!true);
              }}
            >
              X
            </button>
          </div>{" "}
        </section>
      </div>
    </div>
  );
}
