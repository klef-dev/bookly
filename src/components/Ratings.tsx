import React from 'react';
import { Star } from 'react-feather';
import { RatingsParams } from '../interfaces/items';

function Ratings({ averageRating }: RatingsParams) {
  const remainingStars = averageRating ? Math.floor(5 - averageRating) : 4;
  return (
    <div className="flex">
      {[...Array(averageRating)].map((_, i) => (
        <Star key={i} fill="orange" color="white" />
      ))}
      {[...Array(remainingStars)].map((_, i) => (
        <Star key={i} fill="gray" color="white" />
      ))}
    </div>
  );
}

export default Ratings;
