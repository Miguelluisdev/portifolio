import React from 'react';
interface TechImage {
  techImage: string;
}

const TechImages: React.FC<{ images: TechImage[] }> = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image) => (
        <img
          key={image.techImage}
          src={image.techImage}
          alt={image.techImage.replace('.svg', '')}
          className="w-20 h-20 m-4 object-cover rounded-full animate-jump-in animate-once animate-duration-[2000ms] animate-ease-linear"
        />
      ))}
    </div>
  );
};

export default TechImages;
