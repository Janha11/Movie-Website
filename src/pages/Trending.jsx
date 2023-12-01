import React, { useEffect, useState } from 'react';

function Trending() {
  const [populartitles, setPopularTitles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTcyMDI5MDQ0OWJkYTM1MTZkYjU5YTg5MWEwNDEyMiIsInN1YiI6IjY1Njg5YjQyNjM1MzZhMDBlMWY5ODgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OJQY1Jcc5J7aIzzAdmwp-XMDOLdeM6JMGGwIS8BQX9w',
        },
      };

      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const data = await response.json();

        // Extracting only the 'original_title' from each movie and storing in populartitles state
        const movieTitles = data.results.map(movie => movie.original_title);
        setPopularTitles(movieTitles);

        // Fetch additional details for each movie title
        const apikey = 'a1d2195d';
        const omdbDataPromises = movieTitles.map(async (title) => {
          const Title = title;
          const apiurl = `http://www.omdbapi.com/?t=${Title}&apikey=${apikey}`;
          const omdbResponse = await fetch(apiurl);
          return omdbResponse.json();
        });

        // Wait for all promises to resolve
        const omdbDataArray = await Promise.all(omdbDataPromises);

        console.log('OMDb Data Array:', omdbDataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  console.log(populartitles);

  return (
    <div className='banner'>
      {/* Your banner content goes here */}
    </div>
  );
}

export default Trending;
