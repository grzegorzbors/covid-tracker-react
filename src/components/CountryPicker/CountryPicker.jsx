import { useState, useEffect } from "react";

import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountryList = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchCountryList();
  }, [setFetchedCountries]);

  const countryDropDown = fetchedCountries.map((country) => {
    return (
      <option key={country} value={country}>
        {country}
      </option>
    );
  });

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countryDropDown}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
