import React, { useEffect, useState } from "react";

import CurrencyRow from "./CurrencyRow/CurrencyRow";
import classes from "./Currency.css";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

const currency = (props) => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function hendleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function hendleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <div className={classes.Currency}>
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedtCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        amount={fromAmount}
        onChangeAmount={hendleFromAmountChange}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedtCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={hendleToAmountChange}
      />
    </div>
  );
};

export default currency;
