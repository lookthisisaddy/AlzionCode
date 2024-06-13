import React from "react";
import { Link } from "react-router-dom";

const List = ({ list }) => {
  const handleCardCliked = (index) => {
    setClickedIndex(index);
  };

  return (
    <div>
      {list.map((item, index) => {
        return (
          <Link to={`/product:${index}`}>
            <div
              onClick={() => handleCardCliked(index)}
              key={index}
              className="card"
            >
              <div className="text-content">
                <span>{item.category}</span>
                <h2>{item.name}</h2>
              </div>
              <img src={item.image} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default List;
