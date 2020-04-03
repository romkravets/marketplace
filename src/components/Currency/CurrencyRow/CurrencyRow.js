import React from "react";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedtCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount
  } = props;
  return (
    <div>
      {/* <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      /> */}
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
    </div>
  );
}
