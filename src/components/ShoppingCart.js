import { Link } from "react-router-dom";
import bgimg from "../images/basket.jpg";
import { useState, forwardRef, useImperativeHandle } from "react";

const ShoppingCart = forwardRef((props, ref)=> {
    const [number, addNumber] = useState(props.num);
    useImperativeHandle(ref, () =>({
        click() {
            addNumber((n)=>{return n+1;})
        }
    }));
  
    return (
      <Link to="/shippingpage">
        <div className="relative h-auto w-auto pl-4">
          <img className="rounded-full z-30" src={bgimg}></img>
          <div className="pl-12">
            <p className="bg-cyan-800 text-white text-sm w-5 text-center rounded-xl ">
              {number}
            </p>
          </div>
        </div>
      </Link>
    );
  }); 

export default ShoppingCart;
