import React, { useEffect, useState } from "react";
import List from "./Components/List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import DetailedList from "./Components/DetailedList";

const App = () => {
  const [list, setList] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(0);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws/"
    );
    const result = await response.json();
    setList(result);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  

  return (
    <div className="main-container">
      <AppContext.Provider value={{list, setList}}>
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<List list={list}/>} />
              <Route path="/product:productId" element={<DetailedList />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default App;
