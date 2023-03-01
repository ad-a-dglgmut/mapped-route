import React from "react";
import Items from "./Items";



const Collection = (props) => {

  return (
      <div
        id="slider"
        className="m-auto gap-1 grid sm:grid-cols-4 grid-cols-1 justify-items-center"
      >
            {props.items.map((homeData) => (
            <Items
                link={`products/${homeData.link}`}
                picture={homeData.picture}
                name={homeData.name}
                price={homeData.price}
                id={homeData.link}
            />
            ))}
      </div>
  );
};

export default Collection;
