import React, { useState, useMemo } from "react"
import Select from "react-select"
import countryList from "react-select-country-list"

function CountrySelector() {
  const [value, setValue] = useState("")
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return <Select  styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      // borderColor: state.isFocused ? 'grey' : 'grey',
      border: "0px",
      outline:"none",
      focusVisible: "none",
      padding:"0px",
      margin:"0px"
    }),
  }}
  
  options={options} value={value} onChange={changeHandler} ></Select>
}

export default CountrySelector