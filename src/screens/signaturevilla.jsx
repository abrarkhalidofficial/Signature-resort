import React from "react";
import { suitsfeaturesimg, SignatureVillaimg } from "../assets/index.js";
export default function SignatureVilla() {
  //   const [selectedItem, setSelectedItem] = useState([]);
  //   const list = [
  //     {
  //       image: productsright,
  //     },
  //   ];
  //   useEffect(() => {
  //     list
  //       .filter((_item, i) => i === 0)
  //       .map((item) => {
  //         setSelectedItem(item);
  //       });
  //   }, []);
  return (
    <>
      <section className="homesection__two " id="home">
        <div className="homesection__two__content">
          <div className="homesection__two__left">
            <div className="homesection__two__left___content">
              <div className="homesection__two__left__heading">
                <span> Signature </span> Villa Features
              </div>
              <div className="homesection__three__left__info">
                - Separate car parking area for each villa
              </div>
              <div className="homesection__three__left__info">
                - Mountain Facing view for each villa
              </div>
              <div className="homesection__three__left__info">
                - Extra Land along with every villa
              </div>
              <div className="homesection__three__left__info">
                - Spacious Bedrooms with full luxurious furnishing
              </div>
              <div className="homesection__three__left__info">
                - Luxury Spacious washroom
              </div>
              <div className="homesection__three__left__info">
                - Fresh & friendly environment with nonpolluting air
              </div>
              <div className="homesection__three__left__info">
                - No Road in surrounding for traffic chaos
              </div>
              <div className="homesection__three__left__info">
                - Common Parking for all the residents
              </div>
            </div>
          </div>
          <div className="homesection__two__right">
            <div className="homesection__two__right__content">
              <div className="homesection__two__right__img">
                <img src={suitsfeaturesimg} alt="homesection__twoimg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="SignatureVilla">
        <img src={SignatureVillaimg} alt="SignatureVillaimg" />
      </section>
      <section className="Signaturevilla__imgchange">
        <div className="Signaturevilla__imgchange__content">
          <div className="Signaturevilla__imgchange__buttons">
            <button className="Signaturevilla__imgchange__buttons__button">
              Type 1
            </button>
            <button className="Signaturevilla__imgchange__buttons__button">
              Type 2
            </button>
            <button className="Signaturevilla__imgchange__buttons__button">
              Type 3
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
