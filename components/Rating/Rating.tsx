import cn from "classnames";
import StarIcon from "./star.svg";
import { HTMLAttributes, useEffect, useState, KeyboardEvent } from "react";

interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  rating: number;
  isEditable: boolean;
  setRating?: (val: number) => void;
}

const Rating = ({ rating, isEditable, setRating }: RatingProps) => {
  const [stars, setStars] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const buildStars = (currRating: number) => {
    const newStars = stars.map((_, i) => {
      return (
        <span
          key={i}
          onClick={() => onStarClick(i + 1)}
          onMouseEnter={() => handleDisplay(i + 1)}
          onMouseLeave={() => handleDisplay(rating)}
        >
          <StarIcon
            className={cn("cursor-pointer mr-1.5", {
              "fill-violet-600": i < currRating,
              "fill-slate-500": i >= currRating,
            })}
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) => handleSpace(e, i)}
          />
        </span>
      );
    });
    setStars(newStars);
  };

  const onStarClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleDisplay = (i: number) => {
    if (!isEditable) return;
    buildStars(i);
  };

  const handleSpace = (e: KeyboardEvent<SVGAElement>, i: number) => {
    if (!isEditable) {
      return;
    }

    if (e.code === "Space") {
      handleDisplay(i + 1);
    }
  };

  useEffect(() => {
    buildStars(rating);
  }, [rating]);

  return (
    <div className={cn("flex")}>
      {stars.map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  );
};

export default Rating;
