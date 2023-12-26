import styles from './RatingStars.module.scss'
import React, { useState } from 'react';

type StarProps = {
    selected: boolean;
    onSelect: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  };
  
  const Star: React.FC<StarProps> = ({ selected, onSelect, onMouseEnter, onMouseLeave }) => (
    <span
      className={selected ? `${styles.selectedStar} ${styles.star}` : `${styles.unselectedStar} ${styles.star}`}
      onClick={onSelect}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {selected ? '★' : '☆'}
    </span>
  );
  
  const Rating: React.FC = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  
    const handleClick = (index: number) => {
      setRating(index);
    };
  
    const handleHover = (index: number) => {
      setHover(index);
    };
  
    return (
      <div>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            selected={index < (hover || rating)}
            onSelect={() => handleClick(index + 1)}
            onMouseEnter={() => handleHover(index + 1)}
            onMouseLeave={() => handleHover(0)}
          />
        ))}
      </div>
    );
  };
  
  export default Rating;