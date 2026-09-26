
import { useState } from "react";
import { Star } from "@phosphor-icons/react";

import { Container, StarButton } from "./styles";

export function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <Container>
      {[1, 2, 3, 4, 5].map((star) => (
        <StarButton
          key={star}
          type="button"
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          aria-label={`Dar ${star} estrela${star > 1 ? "s" : ""}`}
        >
          <Star
            size={22}
            weight={(hover || rating) >= star ? "fill" : "regular"}
          />
        </StarButton>
      ))}
    </Container>
  );
}

