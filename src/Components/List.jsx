import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const List = () => {
  const { list } = useContext(AppContext);
  return (
    <div>
      {list.map((item, index) => {
        return (
          <Link style={{textDecoration: "none", color: "black"}} key={index} to={`/product/${index + 1}`}>
            <div   
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
