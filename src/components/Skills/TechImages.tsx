import React from 'react';

interface TechImage {
  techImage: string;
  name: string; // Adicionando propriedade para o nome da linguagem
}

const TechImages: React.FC<{ images: TechImage[] }> = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {images.map((image) => (
        <div key={image.techImage} className="m-4 text-center">
          <img
            src={image.techImage}
            alt={image.name}
            className="w-20 h-20 object-cover rounded-full animate-jump-in animate-once animate-duration-[2000ms] animate-ease-linear"
          />
          <p className="text-xl mt-2 font-Montserrat">{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechImages;
