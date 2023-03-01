import Footer from "../components/Footer";
import Logotop from "../components/Logotop";
import { Link } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";
import ShippingInfo from "../components/ShippingInfo";
import { useState } from "react";
const ShippingPage = (props) => {
  
  const [cargo, setCargo] = useState('')
  let combinedPrice=0;
  for(let i =0;i<props.itemsForOrder.length-1;i++)
  {
    combinedPrice+=props.itemsForOrder[i].price;
  }
  console.log(combinedPrice);

  const countryInfo = (country) =>
  {
    switch(country) {
      case "Macedonia":
        setCargo((c)=>{return c=150});
        break;

      case "Albania":
        setCargo((c)=>{return c=250});
        break;

      case "Bulgaria":
        setCargo((c)=>{return c=300});
        break;
        
        case "Kosovo":
          setCargo((c)=>{return c=250});
          break;
        
        default:
          setCargo((c)=>{return c=0});
          break;
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative container mx-auto p-6">
        <Logotop />
      </div>
      <div className="container flex flex-col mb-36 md:flex-row justify-center items-start mx-auto mt-16 space-y-0 md:space-y-0">
        <div className="lex-col-reverse space-y-2 mb-6 md:w-1/2">
          <h1 className="max-w-md text-3xl font-semibold text-veryDarkBlue text-center md:text-4xl md:text-left">
            Shopping cart
          </h1>
          <Link to="/">
            <p>Back to shop</p>
          </Link>
          {props.itemsForOrder.map((items) => (
            <CheckoutItem
              name={items.name}
              price={items.price}
              itempic={items.pic}
              key={items.link}
              size={items.size}
            />
          ))}
          <div
            className="flex justify-between text-veryDarkBlue flex-row gap-x-11 mt-4 items-center"
          >
            <p className="font-normal text-lg">Order</p>
            <div><p>{combinedPrice} ден</p></div>
          </div>
          <div
            className="flex justify-between text-veryDarkBlue flex-row gap-x-11 mt-4 items-center"
          >
            <p className="font-normal text-lg">
              Shipping fees
            </p>
            <div><p>{cargo} ден</p></div>
          </div>
          <div
            className="flex justify-between text-veryDarkBlue flex-row gap-x-11 mt-4 items-center"
          >
            <p className="font-semibold text-xl">Total</p>
            <div><p className="font-semibold text-xl">{cargo+combinedPrice} ден</p></div>
          </div>
        </div>
        <div className="flex flex-col mb-32 mx-8 space-y-4 md:w-1/2">
          <ShippingInfo items={props.itemsForOrder} countryInfo={countryInfo} />
        </div>
      </div>
      <div className="pt-48">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ShippingPage;
