import React from 'react';
import { Star } from 'react-feather';
import { RatingsParams } from '../interfaces/items';

function Ratings({ ratings }: RatingsParams) {
  const remainingStars = Math.floor(5 - ratings);
  return (
    <div className="flex">
      {Array(ratings)
        .fill(null)
        .map((_, i) => (
          <Star key={i} fill="orange" color="white" />
        ))}
      {Array(remainingStars)
        .fill(null)
        .map((_, i) => (
          <Star key={i} fill="gray" color="white" />
        ))}
    </div>
  );
}

export default Ratings;
