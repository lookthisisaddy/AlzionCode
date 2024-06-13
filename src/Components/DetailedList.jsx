import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

const DetailedList = () => {
const {id} = useParams();
const {list, setList} = useContext(AppContext);
const selectedItem = list.filter((item, i)=> item.id === id);

  return (
    <div>
      <div className="header">
        <div className="text-content-detailed">
          <span>{selectedItem.category}</span>
          <h2>{item.name}</h2>
        </div>
        <img src={item.image} />
      </div>
    </div>
  );
};

export default DetailedList;
