import { useEffect, useState } from "react";

export const useHome = () => {
  const [dataCurrency, setDataCurrency] = useState({});

  useEffect(() => {
    fetch(
      `https://api.currencyfreaks.com/latest?apikey=d98ae12e154144f7a49b35a1fc7565da`
    )
      .then((response) => {
        return response.json();
      })
      .then((dataCurrency) => {
        setDataCurrency(dataCurrency.rates);
      });
  }, []);

  // Change The number of digits to appear after the decimal point to be 6 digits
  const CAD = Number.parseFloat(dataCurrency && dataCurrency.CAD).toFixed(6);
  const EUR = Number.parseFloat(dataCurrency && dataCurrency.EUR).toFixed(6);
  const IDR = Number.parseFloat(dataCurrency && dataCurrency.IDR).toFixed(6);
  const JPY = Number.parseFloat(dataCurrency && dataCurrency.JPY).toFixed(6);
  const CHF = Number.parseFloat(dataCurrency && dataCurrency.CHF).toFixed(6);
  const GBP = Number.parseFloat(dataCurrency && dataCurrency.GBP).toFixed(6);

  return {
    dataCurrency,
    CAD,
    EUR,
    IDR,
    JPY,
    CHF,
    GBP,
    // setDataCurrency,
  };
};
