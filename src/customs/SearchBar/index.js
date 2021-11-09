import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleareAutocomplete,
  getAutocomplete,
} from "../../store/actions/AutoComplete";
import Optionitem from "../OptionItem/Index";
import "./SearchBar.css";
const Index = ({ onSearchClicked }) => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.auto);
  const [value, setvalue] = useState("");
  const [options, setoptions] = useState([]);
  const [selectedOption, setselectedOption] = useState({});

  useEffect(() => {
    dispatch(cleareAutocomplete([]));
  }, []);
  useEffect(() => {
    console.log("cities", cities);
  }, [cities]);
  const handleValueChanged = (e) => {
    setvalue(e.target.value);
    const val = e.target.value;
    console.log(val);
    dispatch(getAutocomplete(val));
  };
  const handleOptionPicked = (object) => {
    onSearchClicked(object);
    setvalue(object.LocalizedName);
    dispatch(cleareAutocomplete([]));
  };
  return (
    <div className="search-conatiner">
      <div className="input-search">
        <div className="icon">
          <i className="fas fa-search-location"></i>
        </div>
        <input
          placeholder="Enter city name"
          className="input"
          value={value}
          onChange={(newVal) => handleValueChanged(newVal)}
        />
      </div>
      {cities && cities.length > 0 && (
        <div className="container-options">
          <div className="container-options-inner">
            {cities.map((city, index) => (
              <Optionitem
                key={index}
                object={city}
                onClickOption={(city) => handleOptionPicked(city)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
