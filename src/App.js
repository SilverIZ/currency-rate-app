import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { res } from "./utils/constants";

export default function App() {
  const [datas, setDatas] = useState([]);
  const [rates, setRates] = useState(null);

  const getDatas = async () => {
    try {
      const url = await axios.get(res);
      setRates(url.data);
      processData(url.data);
    } catch (error) {
      console.log(error);
    }
  };

  function processData(r = rates) {
    if (r) {
      let tempData = [];
      let rates = r.rates;

      for (const index in rates) {
        let buyRates =
          parseFloat(rates[index]) +
          ((Math.floor(Math.random() * 4) + 1) / 100) *
            parseFloat(rates[index]);
        let sellRates =
          parseFloat(rates[index]) -
          ((Math.floor(Math.random() * 4) + 1) / 100) *
            parseFloat(rates[index]);
        tempData.push({
          base: index,
          exchange_rates: rates[index].toFixed(4),
          sell_rates: sellRates.toFixed(4),
          buy_rates: buyRates.toFixed(4),
        });
      }
      setDatas(tempData);
    }
  }

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      <div className="App">
        <table className="Table">
          <thead>
            <tr>
              <th></th>
              <th>We Buy</th>
              <th>Exchange Rates</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((item, index) => (
              <tr key={index}>
                <td>{item.base}</td>
                <td>{item.buy_rates}</td>
                <td>{item.exchange_rates}</td>
                <td>{item.sell_rates}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="Desc">
        <p>*currency rate is {rates?.base}</p>
      </div>
    </>
  );
}
