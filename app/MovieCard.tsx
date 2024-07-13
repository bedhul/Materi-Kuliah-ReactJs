"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const MovieCard = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies');
        setMovieData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {movieData && (
        <div className="row">
          {movieData.data.map((movie, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Card className="bg-transparent text-white text-center movie-card">
                <Card.Img
                  className="card-img-top"
                  src={movie.foto}
                  alt="Card image cap"
                  style={{ height: '250px', objectFit: 'cover' }} // Ensure consistent image height
                />
                <div className="bg-dark p-2">
                  <CardText>{movie.judul}</CardText>
                  <CardText>Rating: {movie.rating}</CardText>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
