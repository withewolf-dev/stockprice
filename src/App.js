import { useState } from "react";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [InitialPrice, setInitialPrice] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [CurrentPrice, setCurrentPrice] = useState("");
  const [result, setresult] = useState("");

  const profit = (CurrentPrice - InitialPrice) * Quantity;
  const loss = (InitialPrice - CurrentPrice) * Quantity;
  const ProfitPercentage = (profit / InitialPrice) * 100;
  const LossPercentage = (loss / InitialPrice) * 100;

  const calculateProfitAndLoss = () => {
    if (profit > loss) {
      setresult(
        `yo! proofitt! ${profit}  percentage is ${ProfitPercentage} ${"%"} `
      );
    } else if (loss > profit) {
      setresult(
        `yo! losss! is ${loss}  percentage is ${LossPercentage} ${"%"}`
      );
    } else {
      setresult("NO change in initial price");
    }
  };
  return (
    <div className="App">
      <h1>Stock Price Calculator</h1>
      <h3>Initial Price</h3>
      <input
        onChange={(e) => {
          setInitialPrice(e.target.value);
        }}
        value={InitialPrice}
      />
      <h3>Quantity of stock</h3>
      <input
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
        value={Quantity}
      />
      <h3>current Price</h3>
      <input
        onChange={(e) => {
          setCurrentPrice(e.target.value);
        }}
        value={CurrentPrice}
      />
      <div>
        <button className="button" onClick={calculateProfitAndLoss}>
          Tell me!
        </button>
      </div>
      {result !== null && <h3>{result}</h3>}
      <Footer />
    </div>
  );
}

export default App;
