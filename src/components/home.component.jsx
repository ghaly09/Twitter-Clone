import { useHome } from "./home.hook";

const Home = () => {
  // const { dataCurrency } = useHome();
  const { CAD, EUR, IDR, JPY, CHF, GBP } = useHome();

  return (
    <div>
      {/* <p>{JSON.stringify(dataCurrency)}</p> */}

      <h2 className="title">Exchange Rates Currency</h2>
      <div className="tableCurrency">
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>We Buy</th>
              <th>Exchange Rate</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CAD</td>
              <td>
                {Number.parseFloat(
                  Number(CAD) + (5 / 100) * Number(CAD)
                ).toFixed(4)}
              </td>
              <td>{CAD}</td>
              <td>
                {Number.parseFloat(
                  Number(CAD) - (5 / 100) * Number(CAD)
                ).toFixed(4)}
              </td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>
                {Number.parseFloat(
                  Number(EUR) + (5 / 100) * Number(EUR)
                ).toFixed(4)}
              </td>
              <td>{EUR}</td>
              <td>
                {Number.parseFloat(
                  Number(EUR) - (5 / 100) * Number(EUR)
                ).toFixed(4)}
              </td>
            </tr>
            <tr>
              <td>IDR</td>
              <td>
                {Number.parseFloat(
                  Number(IDR) + (5 / 100) * Number(IDR)
                ).toFixed(4)}
              </td>
              <td>{IDR}</td>
              <td>
                {Number.parseFloat(
                  Number(IDR) - (5 / 100) * Number(IDR)
                ).toFixed(4)}
              </td>
            </tr>
            <tr>
              <td>JPY</td>
              <td>
                {Number.parseFloat(
                  Number(JPY) + (5 / 100) * Number(JPY)
                ).toFixed(4)}
              </td>
              <td>{JPY}</td>
              <td>
                {Number.parseFloat(
                  Number(JPY) - (5 / 100) * Number(JPY)
                ).toFixed(4)}
              </td>
            </tr>
            <tr>
              <td>CHF</td>
              <td>
                {Number.parseFloat(
                  Number(CHF) + (5 / 100) * Number(CHF)
                ).toFixed(4)}
              </td>
              <td>{CHF}</td>
              <td>
                {Number.parseFloat(
                  Number(CHF) - (5 / 100) * Number(CHF)
                ).toFixed(4)}
              </td>
            </tr>
            <tr>
              <td>GBP</td>
              <td>
                {Number.parseFloat(
                  Number(GBP) + (5 / 100) * Number(GBP)
                ).toFixed(4)}
              </td>
              <td>{GBP}</td>
              <td>
                {Number.parseFloat(
                  Number(GBP) - (5 / 100) * Number(GBP)
                ).toFixed(4)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="tagline">
        Rates are based from 1 USD <br /> This application uses API from{" "}
        <a href="https://currencyfreaks.com/">currencyfreaks.com</a>
      </p>
      <p className="author">Designed By Rachmat Ghaly</p>
    </div>
  );
};

export default Home;
