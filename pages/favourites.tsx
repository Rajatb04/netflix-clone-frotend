import { useEffect, useState } from 'react';
import { getFavourites } from '../services/api';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    async function fetchFavourites() {
      const data = await getFavourites();
      setFavourites(data);
    }
    fetchFavourites();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-white text-3xl mb-6">Favourites</h1>
        <div className="grid grid-cols-4 gap-4">
          {favourites.map((movie) => (
            <MovieCard key={movie.id} title={movie.title} image={movie.image} onClick={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
}
