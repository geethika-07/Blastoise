import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetails, useMovieReviews } from '../hooks/useMovieApi';


const MediaDetail = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const { movie, loading: movieLoading } = useMovieDetails(id);
  const { reviews, loading: reviewsLoading } = useMovieReviews(id);

  if (movieLoading || reviewsLoading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (!movie) {
    return <div className="text-center text-red-500">Movie not found.</div>;
  }

  return (
    <div className="p-6 text-white">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Movie Poster */}
        <div className="flex-shrink-0">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg shadow-lg w-full md:w-80"
          />
        </div>

        {/* Movie Details */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-400 mb-4">{movie.release_date}</p>
          <p className="text-lg mb-4">{movie.overview}</p>

          <div className="flex items-center gap-4">
            <span className="text-yellow-500 font-bold">Rating: {movie.vote_average}</span>
            <span className="text-gray-400">Vote Count: {movie.vote_count}</span>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2">Genres</h2>
            <div className="flex flex-wrap gap-2">
              {movie.genres && movie.genres.length > 0 ? (
                movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))
              ) : (
                <span className="text-gray-400">No genres available</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        {reviews.length > 0 ? (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">{review.author}</h3>
                <p className="text-gray-300">{review.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No reviews available for this movie.</p>
        )}
      </div>
    </div>
  );
};

export default MediaDetail;