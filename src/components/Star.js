import React from 'react'



const Star = ({ selected = false, onClick = f => f }) => (
    <div className={selected ? "star selected" : "star"} onClick={onClick} />
  );
  render(<StarRating totalStars={5} />, document.getElementById("root"));

