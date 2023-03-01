import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logotop from "../components/Logotop";

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative container mx-auto p-6">
        <Logotop />
      </div>
      <div class="container flex flex-col mb-36 md:flex-row justify-center items-start mx-auto mt-16 space-y-0 md:space-y-0">
        <div>
          <h1 class="text-4xl font-bold text-veryDarkBlue mb-8">Success!</h1>
          <p class="font-semibold text-base text-veryDarkBlue mb-2">
            Your purchase was successful!
          </p>
          <Link to={"/"}><p class="btn w-30 bg-veryDarkBlue text-white rounded-full">Return to main page</p></Link>
        </div>
      </div>
        <div className="pt-40"> <Footer /></div>
    </div>
  );
};

export default SuccessPage;
