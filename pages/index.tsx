import { useEffect, useState } from 'react';
import { getMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await getMovies();
      setMovies(data); 
    }
    fetchMovies();
  }, []);

  const handleMovieClick = (movieId) => {
    console.log('Movie clicked:', movieId);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-white text-3xl mb-6">Top 100 Movies</h1>
        <div className="grid grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id} 
              title={movie.title} 
              image={movie.image}
              onClick={() => handleMovieClick(movie.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
