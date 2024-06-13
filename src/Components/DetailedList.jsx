import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import './DetailedList.css'

const DetailedList = ({}) => {
  const { productId } = useParams();
  const { list } = useContext(AppContext);
  const selectedItem = list.filter((item) => item.id == productId);

  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass("slide-in");
    return () => {
      setAnimationClass("slide-out");
    };
  }, []);

  return (
    <div className={`detail-container ${animationClass}`}>
      <div className="header">
        <div className="text-content-detailed">
          <span>{selectedItem[0].category}</span>
          <h2>{selectedItem[0].name}</h2>
          <div>PRICE</div>
          <strong>{selectedItem[0].price}</strong>
        </div>
        <img src={selectedItem[0].image} />
      </div>
      <div className="bio">
        <h4>Plant Bio</h4>
        <p>{selectedItem[0].bio}</p>
      </div>
    </div>
  );
};

export default DetailedList;
