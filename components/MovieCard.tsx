import React from 'react';

interface MovieCardProps {
  title: string;
  image: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
      <h2 className="text-white text-lg mt-2">{title}</h2>
    </div>
  );
};

export default MovieCard;
