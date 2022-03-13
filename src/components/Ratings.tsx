import React from 'react';
import { Star } from 'react-feather';
import { RatingsParams } from '../interfaces/items';

function Ratings({ ratingsCount }: RatingsParams) {
  const remainingStars = ratingsCount ? Math.floor(5 - ratingsCount) : 4;
  return (
    <div className="flex">
      {Array(ratingsCount)
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
