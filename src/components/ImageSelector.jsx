import React from "react";

export function ImageSelector({ images }) {
  const [selectedImage, setSelectedImage] = React.useState(0);
  return (
    <section className="Signaturevilla__imgchange">
      <div className="Signaturevilla__imgchange__content">
        <div className="Signaturevilla__imgchange__buttons">
          {images.map((_image, index) => (
            <button
              key={index}
              className={
                index === selectedImage
                  ? "Signaturevilla__imgchange__buttons__button Signaturevilla__imgchange__buttons__button__active"
                  : "Signaturevilla__imgchange__buttons__button"
              }
              onClick={() => setSelectedImage(index)}
            >
              Type {index + 1}
            </button>
          ))}
        </div>
        <div className="Signaturevilla__imgchange__img">
          {images
            .filter((_image, index) => index === selectedImage)
            .map((image, index) => (
              <img key={index} src={image} alt="Signaturevillaimgchange" />
            ))}
        </div>
      </div>
    </section>
  );
}
