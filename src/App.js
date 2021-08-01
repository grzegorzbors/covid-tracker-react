import { useState, useEffect } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

const App = () => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData());
    };
    fetchAPI();
  }, []);

  const handleCountryChange = async (selectedCountry) => {
    setIsLoading(true);
    setCountry(selectedCountry);
    setData(await fetchData(selectedCountry));
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <header>
        <h1>COVID 19 Tracker</h1>
      </header>
      {!isLoading && <Cards data={data} />}
      {isLoading && (
        <p className={styles.loadingText}>Loading {country} data...</p>
      )}
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
