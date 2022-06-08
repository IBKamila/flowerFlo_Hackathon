import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
import "./PaymentForm.css";

const PaymentForm = () => {
  const [focus, SetFocus] = useState("");
  let [expiry, SetExpiry] = useState("");

  const handleDate = (e) => {
    SetMonth(e.target.value);
    SetExpiry(e.target.value);
  };
  const handleExpiry = (e) => {
    SetExpiry(month.concat(e.target.value));
  };

  const [month, SetMonth] = useState("");

  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="order-container">
      <div id="PaymentForm">
        <div className="text">
          <h1 id="orderHeader">Order Form</h1>
        </div>
        <div className="nan">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Address" />
          <input id="number-inp" type="number" placeholder="number" />
        </div>

        <Cards
          cvc={data.cvc}
          focused={focus}
          name={data.name}
          number={data.number}
          expiry={expiry}
        />
        <form className="inps" action="">
          <input
            type="number"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={(e) => SetFocus(e.target.name)}
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleInputChange}
            onFocus={(e) => SetFocus(e.target.name)}
          />

          <select
            className="form-control-month"
            name="expiry"
            onChange={handleDate}
            onFocus={(e) => SetFocus(e.target.name)}
          >
            <option value=" ">Month</option>
            <option value="01">Jan</option>
            <option value="02">Feb</option>
            <option value="03">Mar</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">Aug</option>
            <option value="09">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>

          <select
            className="form-control-year"
            name="expiry"
            onChange={handleExpiry}
            onFocus={(e) => SetFocus(e.target.name)}
          >
            <option value=" ">Year</option>
            <option value="21">2021</option>
            <option value="22">2022</option>
            <option value="23">2023</option>
            <option value="24">2024</option>
            <option value="25">2025</option>
            <option value="26">2026</option>
            <option value="27">2027</option>
            <option value="28">2028</option>
            <option value="29">2029</option>
            <option value="30">2030</option>
          </select>

          <input
            type="tel"
            name="cvc"
            maxLength="3"
            // className=" form-control card"
            pattern="\d*"
            placeholder="CVC"
            onChange={handleInputChange}
            onFocus={(e) => SetFocus(e.target.name)}
          />

          <Link to="/">
            <button id="payment-button">PAY NOW</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
