import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, image, name, platform, price, /* currency */}) {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <div>
          <img src={image} alt={name} />
          <div>
            `{name} - {platform}`
          </div>
          <div>
            `{price}{/* {currency} */}`
          </div>
        </div>
      </Link>
    </div>
  );
}
