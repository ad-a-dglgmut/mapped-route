import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const ShippingInfo = (props) => {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getCountry = (event) => {
    setCountry(event.target.value);
  };
  const getName = (event) => {
    setName(event.target.value);
  };
  const getPhone = (event) => {
    setPhone(event.target.value);
  };
  const getAdress = (event) => {
    setAddress(event.target.value);
  };
  const getCity = (event) => {
    setCity(event.target.value);
  };
  const getZip = (event) => {
    setZip(event.target.value);
  };

  const calculateShipping = () => {
    props.countryInfo(country);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const orderedItems = {
      email: email,
      country: country,
      name: name,
      phone: phone,
      address: address,
      city: city,
      zip: zip,
      ordereditems: JSON.stringify(props.items),
      size: props.size,
    };

    emailjs
      .send(
        "service_cqjf2x8",
        "template_mclnbqu",
        {
          message: JSON.stringify(orderedItems),
        },
        "Rq5F7kqqr58wSRO23"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(orderedItems);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <div className="mb-4">
            <div className="flex flex-col mb-16 mx-8 space-y-6 md:w-1/2">
              <h1 className="max-w-md text-3xl font-semibold text-veryDarkBlue text-center md:text-4xl md:text-left">
                Method of payment
              </h1>
              <p>Cash on delivery</p>
              <h1 className="max-w-md text-3xl font-semibold text-veryDarkBlue text-center md:text-4xl md:text-left">
                Payment
              </h1>
              <p>
                Enter your email address. This email address will be used to
                send you shipping status on your purchesed item
              </p>

              <input
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered input-md w-full max-w-xs bg-veryLightGray"
                onChange={getEmail}
              />
            </div>
          </div>

          <div className="mx-8">
            <h2 className="text-2xl mb-2 font-semibold text-veryDarkBlue text-center md:text-3xl md:text-left">
              Shipping & Delivery
            </h2>
            <p className="mb-6">
              All fields are required unless marked as optional.
            </p>

            <p className="font-semibold text-base text-veryDarkBlue mb-1">
              Country
            </p>
            <select
              className="select w-full max-w-xs mb-2"
              onChange={getCountry}
            >
              <option disabled selected>
                Select your country
              </option>
              <option>Macedonia</option>
              <option disabled>Albania</option>
              <option disabled>Kosovo</option>
              <option disabled>Bulgaria</option>
            </select>

            <p className="font-semibold text-base text-veryDarkBlue mb-1">
              First name and last name
            </p>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-sm mb-2"
              onChange={getName}
            />

            <p className="font-semibold text-base text-veryDarkBlue mb-1">
              Phone Number
            </p>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-sm mb-2"
              onChange={getPhone}
            />

            <div className="flex flex-col">
              <p className="font-semibold text-base text-veryDarkBlue mb-1">
                Home Address
              </p>
              <input
                type="text"
                placeholder="Street"
                className="input input-bordered w-full max-w-sm mb-1"
                onChange={getAdress}
              />
              <input
                type="text"
                placeholder="City, town..."
                className="input input-bordered w-full max-w-sm mb-1"
                onChange={getCity}
              />
              <input
                type="text"
                placeholder="Zip code"
                className="input input-bordered max-w-sm mb-8"
                onChange={getZip}
              />
            </div>
            <button
              onClick={calculateShipping}
              className="btn flex base-100 align-center mb-4"
            >
              Calculate Price
            </button>

            <Popup
              trigger={
                <button
                  type="submit"
                  className="btn flex base-100 align-center"
                  onClick={""}
                >
                  ORDER
                </button>
              }
              modal
            >
              <div class="container flex flex-col mb-36 md:flex-row justify-center items-start mx-auto mt-16 space-y-0 md:space-y-0">
                <div>
                  <h1 class="text-4xl font-bold text-veryDarkBlue mb-8">
                    Success!
                  </h1>
                  <p class="font-semibold text-base text-veryDarkBlue mb-2">
                    Your purchase was successful!
                  </p>
                  <Link to={"/"}>
                    <p class="btn w-30 bg-veryDarkBlue text-white rounded-full">
                      Return to main page
                    </p>
                  </Link>
                </div>
              </div>
            </Popup>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingInfo;
