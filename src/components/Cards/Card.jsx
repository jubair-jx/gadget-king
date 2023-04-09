import React from "react";
import { getDataFromLocal } from "../../utils/fakeDB";

const Card = () => {
  const cart = getDataFromLocal();
  console.log(cart);
  return (
    <div>
      <h2>Hello Card</h2>
    </div>
  );
};

export default Card;
