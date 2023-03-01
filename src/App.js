import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React, { useEffect, useRef, useState} from "react";
import Product from "./pages/Product";
import ShippingPage from "./pages/ShippingPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  useEffect(()=>{
    document.title="Mapped Route";
  }, []  )

  const [itemsForOrder, itemAdd] = useState([{}]);
  const [numOfItemsOrdered, addNum] = useState(0);

  const addItem = (itemData) =>
    {
      itemAdd((addedItems) => {
        return [itemData, ...addedItems];
      });
      addNum((n) => { return n+1});
    } 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home addItem={addItem} numOfItemsOrdered={numOfItemsOrdered}/>}/>
          <Route path="products/:productId" exact element={<Product numOfOrders={numOfItemsOrdered} productPageAddItem={addItem}/>}></Route>
          <Route path="shippingpage" exact element={<ShippingPage numOfItemsOrdered={numOfItemsOrdered} itemsForOrder={itemsForOrder}/>}></Route>
          <Route path="success" exact element={<SuccessPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
