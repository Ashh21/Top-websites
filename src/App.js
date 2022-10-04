import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [site1, setSite1] = useState("Swiggy(5/5");
  const [site2, setSite2] = useState("Zomato(5/4.5");
  const [site3, setSite3] = useState("EatFit(5/4.2)");

  const Clothes = () => {
    setSite1("Myntra(5/5)");
    setSite2("Nyka fashion(5/4.5)");
    setSite3("Ajio(5/4.2)");
  };

  const Electronics = () => {
    setSite1("Flikart(5/5)");
    setSite2("Amazon(5/4.5)");
    setSite3("Croma(5/4.2)");
  };

  const Hotel = () => {
    setSite1("Oyo(5/4.5)");
    setSite2("Make my trip(5/4)");
    setSite3("goibibo(5/4.2)");
  };

  const Matrimonial = () => {
    setSite1("Shadi.com(5/4)");
    setSite2("Jeevansathi.com(5/3.5)");
    setSite3("Sangam.com(5/4.2)");
  };

  const Food = () => {
    setSite1("Swiggy(5/5)");
    setSite2("Zomato(5/4.5)");
    setSite3("EatFit(5/4.2)");
  };

  return (
    <div className="App">
      <h1>
        <span role="img" aria-labelledby="Web-image"></span>
        🌐 Top Websites for shopping and other stuffs
      </h1>
      <h3> check out the top websites here by selecting a genre </h3>

      <button className="btn" onClick={Clothes}>
        Clothes
      </button>
      <button className="btn" onClick={Electronics}>
        Electronics
      </button>
      <button className="btn" onClick={Hotel}>
        Hotel
      </button>
      <button className="btn" onClick={Matrimonial}>
        Matrimonial
      </button>
      <button className="btn" onClick={Food}>
        Food
      </button>
      <hr />

      <div className="site1">
        <p>{site1}</p>
      </div>

      <div className="site2">
        <p>{site2}</p>
      </div>

      <div className="site3">
        <p>{site3}</p>
      </div>
    </div>
  );
}
