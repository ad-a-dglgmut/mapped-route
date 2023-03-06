import Collection from "../components/Collection";
import CoverWebsite from "../images/COVER-WEBSITE.png";
import { homeData } from "../components/Data";
import Footer from "../components/Footer";
import ShoppingCart from "../components/ShoppingCart";
import { useRef } from "react";

function Home(props) {
  const btnClick = (itemData) => {
    props.addItem(itemData);
    ref.current.click();
  };

  const ref = useRef();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative mx-auto">
        <img src={CoverWebsite} alt=":("></img>
      </div>
      

      <div className="container justify-center mx-auto w-full px-6 mt-12 space-y-0 md:space-y-0">
        <div className="w-fit mx-auto text-center">
          <h1 className="max-w-md text-4xl font-semibold text-veryDarkBlue text-center md:text-5xl ">
            Discover The Solar Collection
          </h1>

          <p className="max-w-sm text-center text-veryDarkBlue pl-7">
            Get ready to explore the universe with Mapped Route's first
            collection!
          </p>

          <h2 className="text-red-600">(PREORDER PRICES AND MOCKUP PICTURES)</h2>
        </div>
      </div>
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 justify-center md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-25 space-y-12 md:w-1/2">
      
        </div>
      </div>
      <div className="sticky top-3 pl-5 pb-5 w-fit">
        <ShoppingCart ref={ref} num={props.numOfItemsOrdered} />
      </div>
      <Collection items={homeData} buttonOnClicked={btnClick} />
      <div className="h-10"></div>

      <div className="h-40"></div>

      <Footer />
    </div>
  );
}

export default Home;
