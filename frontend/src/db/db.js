import { useEffect, useState } from "react";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Put you API in .env file

function useDB(mediaType = "all", timeWindow = "week") {
  const [data, setData] = useState([]);
  const KEYWORD = "One piece";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${KEYWORD}`)
      .then((res) => res.json())
      .then((res) => setData(res.results || [])) 
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]); // Set data to an empty array on error
      });
  }, [mediaType, timeWindow]);

  return data;
}

export default useDB;