import { Link } from "react-router-dom";


const Items = (props) => {
  

  return (
    <div className="flex pb-5">
      <div>
        <Link to={props.link}>
          <img src={props.picture} width="250px" height="250px" alt=":("></img>
          <p className="text-xl text-center mt-3 hover:text-darkGrayishBlue text-black">
            {props.name}
          </p>
          <p className="=text-lg text-center hover:text-darkGrayishBlue text-black">
          {props.price} ден. 
          </p>
        </Link>
        <div className="flex justify-center">
        <Link to={props.link}>
        <button className="btn w-30 bg-veryDarkBlue text-white rounded-full">
            ORDER
        </button>
        </Link>
        
        </div>
      </div>
    </div>
  );
};

export default Items;
