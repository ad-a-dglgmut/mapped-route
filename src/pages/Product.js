import { homeData } from "../components/Data";
import Logotop from "../components/Logotop";
import Footer from "../components/Footer";
import { useParams, Link } from "react-router-dom";
import ShoppingCart from "../components/ShoppingCart";
import { useRef, useState } from "react";

const Product = (props) => {
  const [size, changeSize] = useState("M");
  const params = useParams();
  const items = homeData.find((items) => items.link === params.productId);

  const onChangeSize = (event) =>
  {
    changeSize(event.target.value)
  }

  const onNumChange = (event) => {
    event.preventDefault();

    const itemData = {
      id: Math.random(),
      link: `products/${items.link}`,
      price: items.price,
      name: items.name,
      pic: items.picture,
      size: size
    };
    props.productPageAddItem(itemData);
    refreance.current.click();
  };
  const refreance = useRef();

  return (
    <div className="min-h-screen bg-white">
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-center">
          <Logotop />
        </div>
      </nav>
      <div className="container flex flex-col md:flex-row justify-center items-start mx-auto mt-16 space-y-0 md:space-y-0">
        <div className="flex-col-reverse mb-6">
          <div>
            <img
              src={items.picture}
              alt="clothes"
              width="600px"
              height="600px"
              className="pb-3"
            />
          </div>
          <div>
            <img
              src={items.itempic}
              alt="clothes"
              width="600px"
              height="800px"
              className="pb-3"
            />
          </div>
        </div>

        <div className="flex flex-col mb-32 mx-8 space-y-6 md:w-1/2">
          <p className="max-w-md text-3xl font-bold text-veryDarkBlue text-center md:text-4xl md:text-left">
            {items.name}
          </p>
          <Link to="/">
            <p className="text-base font-medium">Back To Shop</p>
          </Link>
          <p className="max-w-sm text-2xl font-semibold text-center text-veryDarkBlue md:text-left">
            {items.price} ден.
          </p>
          <form>
            <div className="flex justify-center md:justify-start">
              <button
                className="btn w-30 bg-veryDarkBlue text-white rounded-full"
                onClick={onNumChange}
                type="submit"
              >
                ORDER
              </button>
            </div>
            <p className="text-xl text-center text-veryDarkBlue md:text-left">
              The Story of the product :{items.description}
            </p>
            <ul className="list-none space-y-1 text-darkGrayishBlue md:text-left">
              <li>Materials: {items.materijal}</li>
              <li>Gender: {items.pol}</li>
              <li>Sizes available: {items.golemina}</li>
              <li>
                <select className="select" onChange={onChangeSize}>
                  <option disabled selected>
                    Select your size
                  </option>
                  {items.golemina.map((sizes) => (
                    <option>{sizes}</option>
                  ))}
                </select>
              </li>
            </ul>
          </form>
          <div className="sticky top-3 pb-5">
            <ShoppingCart ref={refreance} num={props.numOfOrders} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
